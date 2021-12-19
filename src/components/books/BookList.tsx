import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { Book } from "../../../types";
import DataService from "../../service/DataService";
import BookListElement from "./BookListElment";

interface BookListProps{
    isInCart:boolean;
}
const BookList:React.FC<BookListProps> = ({isInCart})=>{
    const [books,setBooks] = useState<Book[]>([]);
    const store = useSelector((state:RootState)=>state.books)
    useEffect(()=>{
        if(isInCart){
           setBooks(store.books)
        }else{
            const getBooks = async ()=>{
                const data = await DataService.getAll()
                const fetchedBooks =data.data;
                setBooks(fetchedBooks.data);
            }
            getBooks()
        }

    },[store.books])

    return(
        <>
        <ul>
            {books.map((book:Book)=>{
                return(
                    <BookListElement key={book.id} bookData={book} isInCart={isInCart}/>
                )
            })}
        </ul>
    </>
    )
}

export default BookList;