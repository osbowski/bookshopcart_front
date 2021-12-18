import { useEffect, useState } from "react";
import { Book } from "../../../types";
import DataService from "../../service/DataService";
const BookList = ()=>{
    const [books,setBooks] = useState<Book[]>([]);
    useEffect(()=>{
        const getBooks = async ()=>{
            const data = await DataService.getAll()
            const fetchedBooks =data.data;
            setBooks(fetchedBooks.data);
        }
        getBooks()
    },[])
    return(
        <>
        <ul>
            {books.map((book:Book)=>{
                return(
                    <li key={book.id}>{book.title}</li>
                )
            })}
        </ul>
    </>
    )
}

export default BookList;