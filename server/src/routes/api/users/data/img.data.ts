import express from "express"
import {Database, OPEN_READWRITE} from 'sqlite3'

const db = new Database('db/images.db')
const router = express.Router()
const log = console.log

function leftPad(value: number) {
  if (value >= 10) {
      return value;
  }

  return `0${value}`;
}

function getDate(source: Date, delimiter = '-') {
  const year = source.getFullYear()
  const month = leftPad(source.getMonth() + 1)
  const day = leftPad(source.getDate())

  return [year, month, day].join(delimiter)
}

router.route('/').post(async (req, res) => {
  const body = req.body

  // CREATE DB TABLE
  db.run('CREATE TABLE IF NOT EXISTS images(idx integer primary key autoincrement, img text, id text, date text)')

  db.run(`INSERT INTO images(img, id, date) VALUES(\'${body.img}\', \'${body.id}\', \'${getDate(new Date())}\')`, (err) => {
    if (err) return log(err.message)

    log(`add image [${body.id}] successful`)
    res.json({ status: 'success', message: `add image [${body.id}] successful` })
  })
})

router.route('/').get(async (req, res) => {
  const params = req.query as any

  let sql = `SELECT * FROM images WHERE id=\'${params.id}\'`

  db.all(sql, [], (err, rows) => {
    if (err) return log(err.message)

    res.json({ data: rows })
  })
})

export default router