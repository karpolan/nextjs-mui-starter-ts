import { envRequired, getCurrentEnvironment } from '@/utils/environment';

export const IS_DEBUG = process.env.NEXT_PUBLIC_DEBUG === 'true'; // Enables logging, etc.

export const IS_PRODUCTION = getCurrentEnvironment() === 'production'; // Enables analytics, etc.

export const PUBLIC_URL = envRequired(process.env.NEXT_PUBLIC_PUBLIC_URL);

IS_DEBUG &&
  console.log('@/config', {
    IS_DEBUG,
    IS_PRODUCTION,
    PUBLIC_URL,
  });
