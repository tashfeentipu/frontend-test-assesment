import { getTableData, updateTableDataById } from "../Middleware/tableData";
import { approveHeader, rejectHeader } from "../../Constants/DataTableHeaders";

export const mapDispatchToProps = (dispatch) => {
  return {
    getTableData: () => dispatch(getTableData()),
    approveTransactionById: (orderId) => dispatch(updateTableDataById(orderId, approveHeader)),
    rejectTransactionById: (orderId) => dispatch(updateTableDataById(orderId, rejectHeader)),
  };
};

export const mapStateToProps = (state) => {
  return {
    tableData: state.table.tableData,
  };
};
