import axios from 'axios';
import { constants } from '../constants/constants';
import { logger } from './logger.service';
import { storage } from './storage.service';

const axiosService = () => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(async (config) => {
    const token = await storage.getItem('accessToken');

    if (publicUrls.some((urlStr) => config?.url?.includes(urlStr))) {
      return config;
    }

    if (token) {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }

    return config;
  });
  instance.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    (error) => {
      logger.error(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        logger.error(error.request);
        return Promise.reject(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        logger.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        logger.error('Error', error.message);
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
    }
  );
  return instance;
};
export const httpService = axiosService();

const publicUrls = [constants.publicUrls.ACCOUNT_API]; // URLs that don't need authorization header
