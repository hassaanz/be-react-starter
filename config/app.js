import { ENV } from './env';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';

export const listenPort = isDebug ? 3000 : process.env.PORT;
export const apiEndpoint = isDebug ? `http://localhost:${listenPort}` : '';
