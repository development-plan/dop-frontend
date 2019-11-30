import AuthorPayload from './AuthorPayload';

interface PostPayload {
    readonly author: AuthorPayload;
    readonly name: string;
    readonly answers: [];
    readonly title: string;
    readonly content: string;
    readonly tags: string[];
    readonly images: string[];
    readonly id: string;
}

export default PostPayload;
