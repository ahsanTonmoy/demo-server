import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRoutes } from './app/modules/product/product.routes'
const app = express()

app.use(express.json())
app.use(cors())
//
app.use('/product', productRoutes)
app.use('/product', productRoutes)
//
app.get('/', (req: Request, res: Response) => {
  res.send('bike server is on v.1.00')
})
app.get('/test', (req: Request, res: Response) => {
  res.send('bike server is on test')
})

export default app
