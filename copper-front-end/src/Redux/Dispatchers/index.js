import { setToken } from "../Middleware/auth";

export const mapDispatchToProps = (dispatch) => {
  return {
    setLoginToken: () => dispatch(setToken()),
  };
};

export const mapStateToProps = (state) => {
  return {
    loginToken: state.auth.loginToken,
  };
};
