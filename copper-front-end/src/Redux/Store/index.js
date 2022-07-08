import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../Reducers/tableData";

const rootReducer = {
  reducer: {
    table: tableReducer,
  }
};
const store = configureStore(rootReducer);

export default store;
