import { GET_TABLE_DATA } from "../Types";

export const getTableDataAction = (data) => {
  return {
    type: GET_TABLE_DATA,
    payload: data,
  };
};