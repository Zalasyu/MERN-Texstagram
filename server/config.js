// Author: Alec Moldovan
// Description: This file 'config.js' contains all environment variables to make our program more portable.
import dotenv from 'dotenv';
dotenv.config();
export const port = process.env.PORT;
export const host = process.env.HOST;
export const database = process.env.DATABASE;
