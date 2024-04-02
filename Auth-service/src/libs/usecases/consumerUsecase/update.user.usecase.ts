import { dependencies } from "../../../utils/dependencies,interface";
import { UserData } from "../../../utils/interface";

export const updateUserUsecase = (dependencies: dependencies) => {
  const {
    repository: { authenticationRepository },
  } = dependencies;
  const executeFunction = async (data: UserData) => {
    const response = await authenticationRepository.updateUser(data);

    if (response.status) {
      return { message: "user updated", status: true };
    } else {
      return { message: "update failed", status: false };
    }
  };

  return { executeFunction };
};
