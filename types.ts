export interface Book{
    id:number,
    title:string,
    author:string,
    cover_url:string,
    pages:number,
    price:number,
    currency:string,
    quantity?:number
}

interface OrderElement{
    id:number,
    quantity:number;
}

export interface IOrder{
    order:OrderElement[],
    first_name: string;
    last_name: string;
    city: string;
    zip_code: string;
}