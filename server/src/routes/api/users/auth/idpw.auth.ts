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
  let name = ''

  let sql = `SELECT * FROM users WHERE id = \'${params.id}\'`;

  db.all(sql, [], (err, rows) => {
    if (err) throw err

    let success = false
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].pw == params.pw) {
        success = true
        name = rows[i].name
      }
    }

    if (success) {
      res.json({ status: 'success', message: `loged in account [${params.name}] successful`, id: params.id, name: name })
    } else {
      res.json({ status: 'failed', message: `failed login [${params.id}]` })
    }
  })
})

export default router