import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../Reducers/tableData";
import currenciesReducer from "../Reducers/currenciesReducer";

export const rootReducer = {
  reducer: {
    table: tableReducer,
    currencies: currenciesReducer
  }
};
const store = configureStore(rootReducer);

export default store;
