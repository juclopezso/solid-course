import { LocalDataBaseService } from "./05-dependency-c-BAD";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor() {}

    async getPosts() {
        // dependencia oculta. Se viola el principio de inversion de dependencias (DIP)
        const jsonDB = new LocalDataBaseService();
        this.posts = await jsonDB.getFakePosts();

        return this.posts;
    }
}
