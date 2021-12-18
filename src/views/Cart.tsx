import BookList from "../components/books/BookList";
const Cart = ()=>{
    return(
        <>
       <div>This is cart</div>
       <BookList isInCart={true} />
       </>  
    )
}


export default Cart;