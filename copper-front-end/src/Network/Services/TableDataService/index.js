import { Endpoints } from "../../../Constants/Endpoints";
import { GetAsync } from "../../HttpRequests";

export const GetTableDataService = async () => {
  const { getTableData } = Endpoints;
  return await GetAsync(getTableData);
};