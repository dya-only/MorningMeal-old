import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 8080

import mainRouter from './routes/main'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended : true } ))
app.use('/api', mainRouter)

app.listen(port, () => console.log('server is running on 8080\n http://localhost:8080/'))