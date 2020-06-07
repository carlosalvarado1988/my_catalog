import { AxiosError } from "axios";

export function handleAxiosError(
  error: AxiosError,
  override_msg: string | null
) {
  if (override_msg) {
    error.message = override_msg;
    return error;
  } else if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    console.debug(`error.response (${error.message})::`);
    console.debug(`\tstatus: ${error.response.status}`);
    console.debug(`\tmessage: `, error.response.data.message);
    return error.response.data;
  } else if (error.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    console.debug(`error.request (${error.message})::`);
    console.debug(`\tstatus: ${error.request.status}`);
    return error;
  } else {
    console.debug(`error: `, error);
    // Something happened in setting up the request and triggered an Error
    return error;
  }
}

export const extractErrorMessage = (error: AxiosError) => {
  return error.response ? error.response.data.message : error.message;
};

export const matchError = (value: string, error: string) =>
  value.indexOf(error) + 1;
