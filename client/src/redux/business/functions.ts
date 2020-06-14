// import axios, { AxiosError, AxiosResponse } from "axios";
import { GetBusinessPayload } from "../../common/types/api/types";
// import { handleAxiosError, extractErrorMessage } from "../../common/api";
import { business_example } from "../tempMockData";

export async function getBusinessAPI(
  payload: GetBusinessPayload
): Promise<any> {
  return await getBusiness(payload);
}

async function getBusiness({ slug }: GetBusinessPayload): Promise<any> {
  return new Promise((resolve, reject) => {
    if (slug === "baboom-life") {
      setTimeout(() => {
        resolve(business_example);
      }, 5000);
    } else {
      reject(new Error("Business Not found"));
    }
  });
}

// async function getBusiness({ slug }: GetBusinessPayload): Promise<any> {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`business/${slug}`)
//       .then(async (response: AxiosResponse<any>) => {
//         const axios_data: any = response.data;
//         if (axios_data.status > 200) {
//           throw new Error(axios_data.message);
//         } else {
//           resolve({
//             data: axios_data.data,
//             message: "SUCCESS_GET_BUSINESS",
//           });
//         }
//       })
//       .catch((error: AxiosError) => {
//         reject(handleAxiosError(error, null));
//       });
//   });
// }
