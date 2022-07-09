import { GET_TABLE_DATA, UPDATE_TABLE_DATA_BY_ID, UPDATE_TABLE_DATA_BY_IDS } from "../Types";

const initialState = {
  tableData: []
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TABLE_DATA:
      return {
        ...state,
        tableData: action.payload,
      };

    case UPDATE_TABLE_DATA_BY_ID:
      const newArray = [...state.tableData]
      const modifiedRowIndex = newArray.findIndex((element) => element.orderId === action.payload.orderId)
      if (modifiedRowIndex !== -1) {
        newArray[modifiedRowIndex] = action.payload
        return {
          ...state,
          tableData: newArray
        }
      }
      return {
        ...state,
      }

    case UPDATE_TABLE_DATA_BY_IDS:
      return {
        ...state,
        tableData: action.payload
      }
    default:
      return state;
  }
}
