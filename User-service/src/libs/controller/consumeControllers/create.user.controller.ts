import { dependencies } from "../../../utils/interfaces/dependency.interface";
import { UserData } from "../../../utils/interfaces/interfaces";

export const createUserController = async (dependencies: dependencies, data: UserData) => {
  const {
    consumeUsecase: { createUserUsecase },
  } = dependencies;
  const response = await createUserUsecase(dependencies).executeFunction(data);
};
