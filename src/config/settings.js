import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.RRAREBOX_API_PORT;
export const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;

export const JWT_SECRET = process.env.JWT_SECRET;

// db
export const DB_HOST =process.env.DB_HOST;
export const DB_PORT =process.env.DB_PORT;
export const DB_PC_USER =process.env.DB_PC_USER;
export const DB_PC_PASSWORD =process.env.DB_PC_PASSWORD;
export const DB_PC_NAME =process.env.DB_PC_NAME;

