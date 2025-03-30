const getEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const config = {
  gbgco: {
    apiUrl: getEnvVar('GBGCO_API_URL'),
    apiKey: getEnvVar('GBGCO_API_KEY'),
  },
} as const; 