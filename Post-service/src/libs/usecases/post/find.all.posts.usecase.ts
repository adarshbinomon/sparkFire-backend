import { dependencies } from "../../../utils/dependency.interface";

export const getAllPosts_useCase = (dependencies: dependencies) => {
  const {
    repository: { postRepository },
  } = dependencies;

  const executeFunction = async () => {
    try {
      const response = await postRepository.getAllPosts();
      if (response.status) {
        return {
          status: true,
          posts: response.posts,
          message: response.message,
        };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      return { status: false, message: "posts not found" };
    }
  };
  return { executeFunction };
};
