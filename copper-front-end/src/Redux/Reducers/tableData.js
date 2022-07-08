import { GET_TABLE_DATA } from "../Types";

const initialState = {
  tableData: ""
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TABLE_DATA:
      return {
        ...state,
        tableData: action.payload,
      };
    default:
      return state;
  }
}
