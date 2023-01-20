import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())

app.listen(port, () => {
  console.log(`Está funcionando na porta ${port}`)
})
