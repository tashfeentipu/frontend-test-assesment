import './App.css';
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div >
        Tashfeen
      </div>
    </Provider>
  );
}

export default App;
