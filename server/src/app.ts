import express from 'express'
import cors from 'cors'
import * as process from "process"

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use('/')