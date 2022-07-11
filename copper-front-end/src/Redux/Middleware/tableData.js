import { getTableDataAction, updateTableDataByIdAction, updateTableDataByIdsAction, setTableLoadingAction } from "../Actions/tableData";
import { getTableDataService, updateTableDataByIdService, updateTableDataByIdsService } from "../../Network/Services/TableDataService";

export const getTableData = () => {
    return async (dispatch) => {
        try {
            dispatch(setTableLoadingAction(true))
            const response = await getTableDataService();
            dispatch(setTableLoadingAction(false))
            dispatch(getTableDataAction(response))
        } catch (error) {
            dispatch(setTableLoadingAction(false))
            console.log(error);
        }
    };
};

export const updateTableDataById = (orderId, header) => {
    return async (dispatch) => {
        try {
            dispatch(setTableLoadingAction(true))
            const response = await updateTableDataByIdService(orderId, header);
            dispatch(setTableLoadingAction(false))
            dispatch(updateTableDataByIdAction(response))
        } catch (error) {
            dispatch(setTableLoadingAction(false))
            console.log(error);
        }
    };
};

export const updateTableDataByIds = (orderIds, header) => {
    return async (dispatch) => {
        try {
            dispatch(setTableLoadingAction(true))
            const response = await updateTableDataByIdsService(JSON.stringify({ orderIds }), header);
            dispatch(setTableLoadingAction(false))
            dispatch(updateTableDataByIdsAction(response))
        } catch (error) {
            dispatch(setTableLoadingAction(false))
            console.log(error);
        }
    };
};