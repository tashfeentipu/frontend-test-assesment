import { getTableDataAction, updateTableDataByIdAction, updateTableDataByIdsAction } from "../Actions/tableData";
import { getTableDataService, updateTableDataByIdService, updateTableDataByIdsService } from "../../Network/Services/TableDataService";

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

export const updateTableDataByIds = (orderIds, header) => {
    return async (dispatch) => {
        try {
            const response = await updateTableDataByIdsService(JSON.stringify({ orderIds }), header);
            dispatch(updateTableDataByIdsAction(response))
        } catch (error) {
            console.log(error);
        }
    };
};