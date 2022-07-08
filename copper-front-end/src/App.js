import './App.css';
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Table from "../src/Components/Table";
import { useEffect } from "react";
import { GetTableDataService } from "../src/Network/Services/TableDataService";

function App() {

  const fetchingFunction = async () => {
    console.log("Data", await GetTableDataService());

  }

  useEffect(() => {
    fetchingFunction()
  }, [])

  return (
    <Provider store={store}>
      <div >
        <Table />
      </div>
    </Provider>
  );
}

export default App;
