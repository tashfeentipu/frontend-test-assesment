import { getTableData } from "../Middleware/tableData";

export const mapDispatchToProps = (dispatch) => {
  return {
    getTableData: () => dispatch(getTableData()),
  };
};

export const mapStateToProps = (state) => {
  return {
    tableData: state.table.tableData,
  };
};
