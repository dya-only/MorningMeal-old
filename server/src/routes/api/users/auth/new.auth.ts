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
  db.run('CREATE TABLE IF NOT EXISTS users(idx integer primary key autoincrement, id text unique, pw text, name text, tag text)')

  let sql = `SELECT * FROM users WHERE id = \'${params.id}\'`;

  db.all(sql, [], (err, rows) => {
    if (err) throw err

    let exists = false
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id === params.id) exists = true
    }

    if (!exists) {
      db.run(`INSERT INTO users(id, pw, name, tag) VALUES(\'${params.id}\', \'${params.pw}\', \'${params.name}\', \'${params.tag}\')`, (err) => {
        if (err) return log(err.message)

        log(`create account [${params.name}] successful`)
        res.json({ status: 'success', message: `create account [${params.name}] successful` })

        window.location.href = '/login'
      })
    } else if (exists && params.id !== '' && params.pw !== '' && params.name !== '' && params.tag !== '') {
      log(`[${params.id}] is exists`)
      res.json({ status: 'exists', message: `[${params.id}] is exists` })
    } else {
      log(`plz type all entry`)
      res.json({status: 'typing_err', message: `plz type all entry`})
    }
  })
})

export default router