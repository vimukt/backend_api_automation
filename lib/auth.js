require('dotenv-flow').config();

export const BASE_URL = process.env.BASE_URI;
export const { API_KEY } = process.env;

export const getHeaders = async () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  api_key: API_KEY,
});

export const getBaseUrl = async () => process.env.BASE_URI;

export const getApiKey = async () => process.env.API_KEY;
