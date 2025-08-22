/* eslint-disable no-console */
import { API_URL, BASE_URL, ASSETS_URL, ENVIRONMENT } from './env.development';

console.log('ENVIRONMENT', ENVIRONMENT);

console.log('BASE URL', BASE_URL);

const debug = ['development', 'debug'].includes(ENVIRONMENT.toLowerCase());

const url = {
  base: BASE_URL,
  api: API_URL,
  assets: ASSETS_URL, 
} as const;

export default {
  environment: ENVIRONMENT,
  debug,

  url,
} as const;