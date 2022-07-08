import { Endpoints } from "../../../Constants/Endpoints";
import { GetAsync } from "../../HttpRequests";

export const getTableDataService = async () => {
  const { getTableData } = Endpoints;
  return await GetAsync(getTableData);
};