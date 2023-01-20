import * as dotenv from 'dotenv';
import { Sequelize } from "sequelize";
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAMEDB, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
})

export default sequelize