import axios, { AxiosError, AxiosResponse } from "axios";
// import {
//   LoginErrorEnums,
//   UserRoleEnum,
// } from "../../common/types/lambda/enums.d";
// import {
//   Customer,
//   LoginMeta,
//   ResponseLogin,
//   ResponseLoginPayload,
//   ResponseSignInPayload,
//   ResponseSubscriptionPayload,
//   ResponseSignIn,
//   SubmitLoginPayload,
//   SubmitSignInPayload,
//   Subscription,
// } from "../../common/types/lambda/types.d";
import { lsGet, lsSet, lsDel } from "../../common/localStorage";
// import { JWT_INDEXED_DB_KEY } from "../../common/constants";
import { removeQueries } from "../../common/utils";
// import {
//   ALREADY_LOGGED_IN,
//   ERROR_CHECK_MAGIC_LINK,
//   ERROR_LOGIN_FAILED,
//   ERROR_NOT_ADMIN,
//   ERROR_SIGNIN_FAILED,
//   ERROR_USER_NOT_FOUND,
//   SUCCESS_LOGIN,
//   SUCCESS_SIGNIN,
// } from "../../common/messages";
import { handleAxiosError } from "../../common/api";
// import {
//   getSubscriptionLambda,
//   buildPagination,
// } from "../subscriptions/functions";

function authCookieValid(): boolean {
  return Boolean(getAuthToken());
}

async function getJwt(payload: any): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .post(`login`, payload)
      .then(async (response: AxiosResponse<any>) => {
        const axios_data: any = response.data;
        const meta: any = axios_data.meta;
        const customer: any = axios_data.data;
        if (axios_data.status > 200) {
          throw new Error("axios_data.message");
        } else if (meta.token) {
          // if (customer.role && customer.role !== UserRoleEnum.ADMIN) {
          //   signOut();
          //   throw new Error("LoginErrorEnums.ERROR_UNAUTHORIZED");
          // }
          const jwt: string = meta.token.jwt;
          setAuthCookie(jwt, meta.token.expires);
          setAuthHeader(jwt);
          resolve({ customer, message: "SUCCESS_LOGIN" });
        } else {
          throw new Error("error");
        }
      })
      .catch((error: AxiosError) => {
        reject(handleAxiosError(error, null));
      });
  });
}

function setAuthCookie(jwt: string, time: number): boolean {
  if (jwt && time) {
    signOut();
    return lsSet("token?", jwt, time);
  }
  return false;
}

function setAuthHeader(jwt: string): boolean {
  if (jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    return true;
  }
  return false;
}

export const signIn = async (payload: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`register`, payload)
      .then((response: AxiosResponse<any>) => {
        const axios_data: any = response.data;
        if (axios_data.status > 200) {
          throw new Error(axios_data.message);
        }
        resolve({
          message: axios_data.message ? axios_data.message : "SUCCESS_SIGNIN",
        });
      })
      .catch((error: AxiosError) => {
        reject(handleAxiosError(error, null));
      });
  });
};

export const signOut = (): boolean => {
  removeQueries();
  return lsDel("JWT_INDEXED_DB_KEY");
};

export function getAuthToken(): string {
  return lsGet("JWT_INDEXED_DB_KEY");
}

export const submitLogin = async (payload: any): Promise<any> => {
  const cookieValid: boolean = authCookieValid();
  if (payload.email && payload.token) {
    try {
      const response: any = await getJwt(payload);
      return response;
    } catch (error) {
      throw error;
    }
  }
  if (cookieValid) {
    setAuthHeader(payload.authToken);

    return Promise.resolve({
      message: "ALREADY_LOGGED_IN",
    });
  }
  return Promise.reject({ message: `` });
};
