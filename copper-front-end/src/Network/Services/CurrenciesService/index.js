import { Endpoints } from "../../../Constants/Endpoints";
import { GetAsync } from "../../HttpRequests";

export const getCurrenciesDataService = async () => {
    const { getCurrenciesData } = Endpoints;
    return await GetAsync(getCurrenciesData);
};
