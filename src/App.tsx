import Homepage from "./views/Homepage";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Homepage />
      </div>
    </Provider>
  );
}

export default App;
