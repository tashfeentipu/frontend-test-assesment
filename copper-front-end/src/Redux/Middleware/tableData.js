import { tokenAction } from "../Actions/tableData";

export const setToken = () => {
    return async (dispatch) => {
        try {
            dispatch(tokenAction("response.token"))
        } catch (error) {
            console.log(error);
        }
    };
};