import dotenv from 'dotenv';
dotenv.config();

export const development = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  dialect: process.env.DB_DIALECT
};