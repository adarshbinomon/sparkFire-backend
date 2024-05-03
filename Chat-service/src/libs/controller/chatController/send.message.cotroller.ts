import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const {
    useCase: { sendMessageUsecase },
  } = dependencies;

  const sendMessageController = async (req: Request, res: Response) => {
    try {
      const recieverId = req.params.userId;
      const { senderId, message } = req.body;

      const response = await sendMessageUsecase(dependencies).executeFunction(
        senderId,
        recieverId,
        message
      );
      // console.log('res:', response);

      if (response.status) {
        res.status(201).json({status:true,message:"message sent successfully",sentMessage:response.savedMessage});
      }
    } catch (error) {
      console.log("error in send message controller:", error);
    }
  };

  return sendMessageController;
};
