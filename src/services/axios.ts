import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { REACT_APP_API_URL } from '../config';

export class HttpError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'HttpError'
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

function responseHandler(response: AxiosResponse<any>) {
  if (response.status === 200) {
    const data = response?.data
    if (!data) {
      throw new HttpError('API Error. No data!');
    }
    return data
  }
  throw new HttpError('API Error! Something went wrong, please try again later!');
}

/**
 * Process some common error cases and throw the error for further handling.
 * In this case, we are handling network errors, 404, 401, and other status codes so far
 * We can further extend this function to handle more cases.
 * We can further have some system logging or error tracking here.
 * @param error
 */
function httpErrorHandler(error: AxiosError<any>) {
  if (error === null) throw new Error('Not defined error!')
  if (axios.isAxiosError(error)) {
    const response = error?.response
    const request = error?.request

    if (error.code === 'ERR_NETWORK' || error.code === 'ERR_INTERNET_DISCONNECTED') {
      console.log('connection problems..');
    } else if (error.code === 'ERR_CANCELED') {
      console.log('connection canceled..');
    }

    if (response) {
      const statusCode = response?.status
      if (statusCode === 404) {
        console.log('The requested resource does not exist or has been deleted');
      } else if (statusCode === 401) {
        console.log('Please login to access this resource');
        window.location.href = '/login';
      }
    } else if (request) {
      console.log('The request was made but no response was received');
    }
  }
  console.log(error.message)
  throw error;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.response.use(responseHandler, httpErrorHandler)


export default axiosInstance;
