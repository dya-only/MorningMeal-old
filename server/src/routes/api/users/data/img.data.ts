import express from "express"
import {Database, OPEN_READWRITE} from 'sqlite3'

const db = new Database('db/user.db')
const router = express.Router()
const log = console.log

router.route('/').post(async (req, res) => {
  const body = req.body

  log(body)
//   let sql = `SELECT * FROM users WHERE id = \'${params.id}\'`;

//   db.all(sql, [], (err, rows) => {
//     if (err) throw err

//     let images: string[] = rows[0].imgs
//     images.push(params.img)

//     log ('img', images)
    
//     db.run(`INSERT INTO users(id, pw, name, tag) VALUES(\'${params.id}\', \'${params.pw}\', \'${params.name}\', \'${params.tag}\')`, (err) => {
//       if (err) return log(err.message)

//       log(`add image [${params.id}] successful`)
      res.json({ status: 'success', img: body })
//     })

//   })
})

export default router