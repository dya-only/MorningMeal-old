import express from "express"
import { Database } from 'sqlite3'

const db = new Database('db/students.db')
const router = express.Router()
const log = console.log

router.route('/').get(async (req, res) => {
  const params = req.query as any

  // CREATE DB TABLE
  db.run('CREATE TABLE IF NOT EXISTS students(idx integer primary key autoincrement, student_id text, parent_id text)')

  db.run(`INSERT INTO students(student_id, parent_id) VALUES(\'${params.student_id}, ${params.parent_id}\')`, (err) => {
    if (err) return log(err.message)

    log(`add image [${params.student_id}, ${params.parent_id}] successful`)
    res.json({ status: 'success', message: `add image [${params.student_id}, ${params.parent_id}] successful` })
  })
})

export default router