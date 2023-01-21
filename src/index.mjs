import * as dotenv from 'dotenv';
import express from "express";
import './database/models/index.mjs';
import router from './routes/index.mjs';

dotenv.config()

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(router)

app.listen(port, async () => {
  console.log(`Está funcionando na porta ${port}`)
})
