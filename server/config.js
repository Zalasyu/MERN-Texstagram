// Author: Alec Moldovan
// Description: This file 'config.js' contains all environment variables to make our program more portable.
import dotenv from 'dotenv';
dotenv.config();
export const port = process.env.PORT;
export const host = process.env.HOST;
export const db_name = process.env.DB_NAME;
export const db_user = process.env.DB_USER;
export const db_host = process.env.DB_HOST;
export const db_pass = process.env.DB_PASS;

