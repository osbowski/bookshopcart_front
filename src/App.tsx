import { Provider } from "react-redux";
import { store } from "./state/store";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./views/Homepage";
import Cart from "./views/Cart";
import Order from "./views/Order";

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
