import { getTableDataAction } from "../Actions/tableData";
import { getTableDataService } from "../../Network/Services/TableDataService";

export const getTableData = () => {
    return async (dispatch) => {
        try {
            const response = await getTableDataService();
            dispatch(getTableDataAction(response))
        } catch (error) {
            console.log(error);
        }
    };
};