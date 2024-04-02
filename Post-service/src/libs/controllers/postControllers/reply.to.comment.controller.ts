import { Request, Response } from 'express'; 

export default (dependencies: any) => {
    const { useCase: { replyToComment_useCase } } = dependencies;

    const replyToCommentController = async (req: Request, res: Response) => {
        const postId = req.params.postId;
        const commentData = { ...req.body };

        try {
            const response = await replyToComment_useCase(dependencies).executeFunction(postId, commentData);

            if (response.status) {
                res.status(201).json({ status: true, message: response.message, data: response.data });
            } else {
                res.status(400).json({ status: false, message: 'Failed to reply to comment' });
            }
        } catch (error) {
            console.error('Error replying to comment:', error);
            res.status(500).json({ status: false, message: 'Internal server error' });
        }
    };

    return replyToCommentController;
};
