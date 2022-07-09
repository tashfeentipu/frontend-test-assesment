import { Provider } from "react-redux";
import Table from "../src/Components/Table";
import './App.css';
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="mainContainer" >
        <Table />
      </div>
    </Provider>
  );
}

export default App;
