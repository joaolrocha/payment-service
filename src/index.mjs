import * as dotenv from 'dotenv';
import express from "express";
import db from './db/index.mjs';
dotenv.config()

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())

app.listen(port, async () => {
  console.log(`Está funcionando na porta ${port}`)

  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})
