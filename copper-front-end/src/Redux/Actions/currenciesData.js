import { GET_CURRENCIES_DATA } from "../Types";

export const getCurrenciesDataAction = (data) => {
  return {
    type: GET_CURRENCIES_DATA,
    payload: data,
  };
};