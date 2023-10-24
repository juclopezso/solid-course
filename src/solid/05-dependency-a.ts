import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    // inversion de dependencia
    const provider = new LocalDataBaseService();
    // const provider = new JsonDatabaseService();
    
    // inyeccion de dependencias - provider
    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();
