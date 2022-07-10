import { getCurrenciesDataService } from "../../Network/Services/CurrenciesService";
import { getCurrenciesDataAction } from "../Actions/currenciesData";

export const getCurrenciesDataMiddleware = () => {
    return async (dispatch) => {
        try {
            const response = await getCurrenciesDataService();
            dispatch(getCurrenciesDataAction(response))
        } catch (error) {
            console.log(error);
        }
    };
};