import express from "express"
import { Database } from 'sqlite3'

const router = express.Router()
const log = console.log

router.route('/').get(async (req, res) => {
  const { run } = new Database('db/user.db')
  const params = req.query as any

  // CREATE DB TABLE
  run('CREATE TABLE user(idx integer primary key autoincrement, id text unique, pw text, name text, tag text)')

  // log(`id: ${params.id}\npw: ${params.pw}\nname: ${params.name}\ntag: ${params.tag}`)
  res.json({ id: params.id, pw: params.pw, name: params.name, tag: params.tag, message: 'create successful' })
})

export default router