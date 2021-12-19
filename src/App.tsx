import { Provider } from "react-redux";
import { store } from "./state/store";
import { Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import Cart from "./views/Cart";
import Order from "./views/Order";
import TheHeader from "./components/UI/TheHeader";
import "./app.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TheHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
