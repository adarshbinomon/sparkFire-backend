import express from "express";
import cors from "cors";
import dependencies from "./config/dependencies";
import { routes } from "./router";
import session, { MemoryStore, SessionOptions } from "express-session";
import dotenv from "dotenv";
import path from "path";
import { userConsumer } from "./events/authConsumer";
dotenv.config({ path: ".env" });

const app = express();

const store = new MemoryStore();
declare module "express-session" {
  interface Session {

}
}

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SECRET || "default-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 60 * 1000,
      httpOnly: true,
    },
    store: store,
  } as SessionOptions)
);

userConsumer(dependencies);

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes(dependencies));

app.use("/images", express.static(path.join(__dirname, "../public/Images")));

export { app };
