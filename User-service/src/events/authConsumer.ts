import { kafka } from "../config/kafkaClient";
import { createUserController } from "../libs/controller/consumeControllers";
import { Dependencies } from "../utils/interfaces/dependency.interface";

const consumer = kafka.consumer({
  groupId: "group-service1",
});

export const userConsumer = async (dependencies: Dependencies) => {
  try {
    console.log('auth to post consumer');
    
    
    await consumer.connect();
    await consumer.subscribe({ topic: "authTopic", fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ message }) => {
        try {
          console.log('userConsumer');
          const binaryData: any = message.value;
          const jsonString: string = binaryData?.toString();
          const jsonData = JSON.parse(jsonString);
          const messageType = jsonData?.type;
          console.log(jsonData);
          

          if (messageType === "createUser") {            
            await createUserController(dependencies, jsonData.data);
          } else {
            console.log("Unhandled message type:", messageType);
          }
        } catch (error) {
          console.error("Error processing message:", error);
        }
      },
    });
  } catch (error) {
    console.error("Error in auth consumer", error);
  }
};
