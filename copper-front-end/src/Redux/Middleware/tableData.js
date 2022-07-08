import { getTableDataAction, updateTableDataByIdAction } from "../Actions/tableData";
import { getTableDataService, updateTableDataByIdService } from "../../Network/Services/TableDataService";

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

export const updateTableDataById = (orderId, header) => {
    return async (dispatch) => {
        try {
            const response = await updateTableDataByIdService(orderId, header);
            dispatch(updateTableDataByIdAction(response))
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateTableDataInBulk = (orderIdArray) => {
    return async (dispatch) => {
        try {
            const response = await getTableDataService();
            dispatch(getTableDataAction(response))
        } catch (error) {
            console.log(error);
        }
    };
};