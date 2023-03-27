import { Options, Sequelize, Dialect } from "sequelize";
import 'dotenv/config'

const databaseConfig: Options = {
    dialect: 'postgres' as Dialect,
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    define: {
        timestamps: true
    },
};

const sequelize = new Sequelize(databaseConfig);
// sequelize.sync({force: true});
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;