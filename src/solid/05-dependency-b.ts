import { PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // inyeccion de dependencia
    constructor( private postProvider: PostProvider ) {}

    async getPosts() {
        // dependencia oculta. Se viola el principio de inversion de dependencias (DIP)
        // const jsonDB = new LocalDataBaseService();
        // this.posts = await jsonDB.getFakePosts();
        
        this.posts = await this.postProvider.getPosts(); 

        return this.posts;
    }
}
