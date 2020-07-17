// import axios, { AxiosError, AxiosResponse } from "axios";
import { DeliveryOrder } from "../../common/types/api/types";
// import { handleAxiosError, extractErrorMessage } from "../../common/api";

export async function submitOrderAPI(payload: DeliveryOrder): Promise<any> {
  return await submitOrder(payload);
}

async function submitOrder(payload: DeliveryOrder): Promise<any> {
  return new Promise((resolve, reject) => {
    const mocksucess = true;
    if (mocksucess) {
      setTimeout(() => {
        resolve({
          success: true,
          status: 200,
        });
      }, 3000);
    } else {
      reject(new Error("Error in submit order"));
    }
  });
}
