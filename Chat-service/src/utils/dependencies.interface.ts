export interface dependencies {
    repository:     Repository;
    useCase:        UseCase;
    consumeUsecase: ConsumeUsecase;
}

export interface ConsumeUsecase {
    createUserUsecase: Function;
    updateUserUsecase: Function;
}

export interface Repository {
    postRepository: PostRepository;
}

export interface PostRepository {
    createUser:             Function;
    createPost:             Function;
    findPosts:              Function;
    getPost:                Function;
    updateUser:             Function;
    findUser:               Function;
    editPost:               Function;
    deletePost:             Function;
    getAllPosts:            Function;
    getAllPostsForAdmin:    Function;
    likePost:               Function;
    addComment:             Function;
    updatePostStatus:       Function;
    findUserCommunityPosts: Function;
    findCommunityPosts:     Function;
    replyToComment:     Function;

}

export interface UseCase {
    createPost_UseCase:           Function;
    findUserPosts_useCase:        Function;
    getPost_useCase:              Function;
    editPost_useCase:             Function;
    deletePost_useCase:           Function;
    getAllPosts_useCase:          Function;
    likePost_useCase:             Function;
    addComment_Usecase:           Function;
    updataPostStatus_useCase:     Function;
    getAllPostsAdmin_useCase:     Function;
    getUserCommunityPost_useCase: Function;
    getCommunityPosts_useCase:    Function;
    replyToComment_useCase:    Function;
}
