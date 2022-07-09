import { getTableData, updateTableDataById, updateTableDataByIds } from "../Middleware/tableData";
import { approveHeader, rejectHeader, approveBulkHeader, rejectBulkHeader } from "../../Constants/DataTableHeaders";

export const mapDispatchToProps = (dispatch) => {
  return {
    getTableData: () => dispatch(getTableData()),
    approveTransactionById: (orderId) => dispatch(updateTableDataById(orderId, approveHeader)),
    rejectTransactionById: (orderId) => dispatch(updateTableDataById(orderId, rejectHeader)),
    approveTransactionByIds: (orderIds) => dispatch(updateTableDataByIds(orderIds, approveBulkHeader)),
    rejectTransactionByIds: (orderIds) => dispatch(updateTableDataByIds(orderIds, rejectBulkHeader)),
  };
};

export const mapStateToProps = (state) => {
  return {
    tableData: state.table.tableData,
  };
};
