import { HttpClient } from "./02-open-close-c";
// la idea del ejercicio era crear una clase propia de http client
// para hacer facil la modificacion de la dependencia de axios en caso de ser necesario
// NOTE: HttpClient es el uso de un parton adaptador


export class TodoService { 

    constructor( private http: HttpClient ){}

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor( private http: HttpClient ){}

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor( private http: HttpClient ){}

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}
