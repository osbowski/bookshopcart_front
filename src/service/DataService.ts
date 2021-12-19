import axios from 'axios';
import { Book } from '../../types'

const http = axios.create({
    baseURL:"http://localhost:3001/api",
    headers:{
        "Content-type":"application/json",
    }
});

class DataService{
    getAll(){
        return http.get('/book')
    }
    getOneById(id:string){
        return http.get<Book>(`/book/${id}`)
    }
    order(data:string){  
        return http.post('/order',data)
    }
}


export default new DataService();