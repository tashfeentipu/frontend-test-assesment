import { Endpoints } from "../../../Constants/Endpoints";
import { GetAsync, PutAsync } from "../../HttpRequests";

export const getTableDataService = async () => {
  const { getTableData } = Endpoints;
  return await GetAsync(getTableData);
};

export const updateTableDataByIdService = async (orderId, header) => {
  const { updateTableDataById } = Endpoints;
  return await PutAsync(updateTableDataById(orderId), header);
};

export const updateTableDataByIdsService = async (orderIds, header) => {
  const { updateTableDataByIds } = Endpoints;
  return await PutAsync(updateTableDataByIds, orderIds, header);
};