import { GET_TABLE_DATA, UPDATE_TABLE_DATA_BY_ID, UPDATE_TABLE_DATA_BY_IDS } from "../Types";

export const getTableDataAction = (data) => {
  return {
    type: GET_TABLE_DATA,
    payload: data,
  };
};

export const updateTableDataByIdAction = (data) => {
  return {
    type: UPDATE_TABLE_DATA_BY_ID,
    payload: data,
  };
};

export const updateTableDataByIdsAction = (data) => {
  return {
    type: UPDATE_TABLE_DATA_BY_IDS,
    payload: data,
  };
};