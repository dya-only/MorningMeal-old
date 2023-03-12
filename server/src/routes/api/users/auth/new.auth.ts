import express from "express"
import {Database, OPEN_READWRITE} from 'sqlite3'

const db = new Database('db/user.db', OPEN_READWRITE, (err) => {
  if (err) console.error(err.message)
  else console.log('Connected to the database.')
})
const router = express.Router()
const log = console.log

router.route('/').get(async (req, res) => {
  const params = req.query as any

  // CREATE DB TABLE
  db.run('CREATE IF NOT EXISTS TABLE users(idx integer primary key autoincrement, id text unique, pw text, name text, tag text)')

  // log(`id: ${params.id}\npw: ${params.pw}\nname: ${params.name}\ntag: ${params.tag}`)
  res.json({ id: params.id, pw: params.pw, name: params.name, tag: params.tag, message: 'create successful' })

  db.close()
})

export default router