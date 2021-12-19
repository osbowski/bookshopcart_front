// import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";
import { IOrder } from '../../types';

interface Inputs {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

const Order = () => {
  const store = useSelector((state: RootState) => state.books);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();



  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const orderData:IOrder = {
        order:[],
        ...data
    }
    store.books.map(book=>{
        const orderBookData = {
            id:book.id,
            quantity:book.quantity!
        }
        orderData.order.push(orderBookData)
    })

    console.log(orderData)
  };

  return (
    <>
      <div>Podaj dane i zatwierdź formularz</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="first_name">Imię</label>
          <input
            type="text"
            id="first_name"
            {...register("first_name", { required: true })}
          />
          {errors.first_name && "Musisz podać imię"}
        </div>
        <div>
          <label htmlFor="last_name">Nazwisko</label>
          <input
            type="text"
            id="last_name"
            {...register("last_name", { required: true })}
          />
          {errors.first_name && "Musisz podać nazwisko"}
        </div>
        <div>
          <label htmlFor="city">Miejścowość</label>
          <input
            type="text"
            id="city"
            {...register("city", { required: true })}
          />
          {errors.first_name && "Musisz podać miasto"}
        </div>
        <div>
          <label htmlFor="zip_code">Kod pocztowy</label>
          <input
            type="text"
            id="zip_code"
            {...register("zip_code", {
              required: true,
              pattern: /[0-9]{2}-[0-9]{3}/,
            })}
          />
          {errors.first_name && "Musisz podać poprawny kod pocztowy"}
        </div>

        <input type="submit" value="Zamawiam i płacę" />
      </form>
    </>
  );
};

export default Order;
