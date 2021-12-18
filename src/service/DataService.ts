import axios from 'axios';

const http = axios.create({
    baseURL:"http://localhost:3001/api",
    headers:{
        "Content-type":"aplication/json",
    }
});

class DataService{
    getAll(){
        return http.get('/book')
    }
    getOneById(id:any){
        return http.get(`/book/${id}`)
    }
    order(data:any){
        return http.post(`order`,data)
    }
}


export default new DataService();