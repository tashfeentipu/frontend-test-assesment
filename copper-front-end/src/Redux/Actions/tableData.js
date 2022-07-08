import { GET_TABLE_DATA } from "../Types";

export const tokenAction = (token) => {
  return {
    type: GET_TABLE_DATA,
    payload: token,
  };
};