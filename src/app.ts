import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()

//
app.use(express.json()), app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('demo server is on port 3000 v.003 !')
})

export default app

//  D:\Server-file\assignment 02\demo-server\dist/ .env
