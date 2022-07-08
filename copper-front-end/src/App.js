import './App.css';
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Table from "../src/Components/Table";

function App() {
  return (
    <Provider store={store}>
      <div >
        <Table />
      </div>
    </Provider>
  );
}

export default App;
