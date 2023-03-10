import express from "express"
import { Database } from 'sqlite3'

const router = express.Router()
const log = console.log

router.route('/').get(async (req, res) => {
  const { run } = new Database('db/user.db')
  const params = req.query as any

  // CREATE DB TABLE
  // run('CREATE TABLE user(id integer primary key autoincrement, name text, email text unique, wish_id text, watched_id text)')

  log(`id: ${params.id}\npw: ${params.pw}\nname: ${params.name}\ntag: ${params.tag}`)
  res.json({ id: params.id, pw: params.pw, message: 'create successful' })
})

export default router