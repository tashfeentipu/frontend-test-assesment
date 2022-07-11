import {
  GET_TABLE_DATA, UPDATE_TABLE_DATA_BY_ID,
  UPDATE_TABLE_DATA_BY_IDS, SELECT_ALL_TABLE_DATA,
  SELECT_TABLE_DATA, TABLE_DATA_LOADING
} from "../Types";

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

export const selectTableDataAction = (orderId, checked) => {
  return {
    type: SELECT_TABLE_DATA,
    payload: { orderId, checked },
  };
};

export const selectAllTableDataAction = (checked) => {
  return {
    type: SELECT_ALL_TABLE_DATA,
    payload: { checked },
  };
};

export const setTableLoadingAction = (loading) => {
  return {
    type: TABLE_DATA_LOADING,
    payload: loading,
  };
};

