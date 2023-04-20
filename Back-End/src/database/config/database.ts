import { Options, Sequelize, Dialect } from "sequelize";
import 'dotenv/config'

const databaseConfig: Options = {
    dialect: 'postgres' as Dialect,
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // This line is for development only
      }
    }
};

const sequelize = new Sequelize(databaseConfig);
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;