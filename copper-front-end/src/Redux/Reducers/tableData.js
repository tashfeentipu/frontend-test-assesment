import {
  GET_TABLE_DATA, UPDATE_TABLE_DATA_BY_ID,
  UPDATE_TABLE_DATA_BY_IDS, SELECT_TABLE_DATA,
  SELECT_ALL_TABLE_DATA, TABLE_DATA_LOADING
} from "../Types";

const initialState = {
  tableData: [],
  tableLoading: false
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TABLE_DATA:
      let newTableData = [...action.payload]
      newTableData = newTableData.map(element => {
        return { ...element, selected: false }
      })
      return {
        ...state,
        tableData: newTableData,
      };

    case UPDATE_TABLE_DATA_BY_ID:
      const newArray = [...state.tableData]
      const modifiedRowIndex = newArray.findIndex((element) => element.orderId === action.payload.orderId)
      if (modifiedRowIndex !== -1) {
        newArray[modifiedRowIndex] = { ...action.payload, selected: false }
        return {
          ...state,
          tableData: newArray
        }
      }
      return {
        ...state,
      }

    case UPDATE_TABLE_DATA_BY_IDS:
      let updatedTableData = [...action.payload]
      updatedTableData = updatedTableData.map(element => {
        return { ...element, selected: false }
      })
      return {
        ...state,
        tableData: updatedTableData
      }

    case SELECT_TABLE_DATA:
      const selectTableDataArray = [...state.tableData]
      const modifiedSelectedRowIndex = selectTableDataArray.findIndex((element) => element.orderId === action.payload.orderId)
      if (modifiedSelectedRowIndex !== -1) {
        selectTableDataArray[modifiedSelectedRowIndex] = { ...selectTableDataArray[modifiedSelectedRowIndex], selected: action.payload.checked }
        return {
          ...state,
          tableData: selectTableDataArray
        }
      }
      return {
        ...state,
        tableData: selectTableDataArray
      }

    case SELECT_ALL_TABLE_DATA:
      let selectAllTableDataArray = [...state.tableData]
      selectAllTableDataArray = selectAllTableDataArray.map(element => {
        return { ...element, selected: action.payload.checked }
      })

      return {
        ...state,
        tableData: selectAllTableDataArray
      }

    case TABLE_DATA_LOADING:
      return {
        ...state,
        tableLoading: action.payload
      }
    default:
      return state;
  }

}
