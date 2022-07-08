import { setToken } from "../Middleware/tableData";

export const mapDispatchToProps = (dispatch) => {
  return {
    setLoginToken: () => dispatch(setToken()),
  };
};

export const mapStateToProps = (state) => {
  return {
    tableData: state.table.tableData,
  };
};
