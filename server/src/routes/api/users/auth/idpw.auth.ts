import express from "express"
import jwt from 'jsonwebtoken'

const router = express.Router()
const log = console.log

router.route('/').get(async (req, res) => {
  const params = req.query as any
  res.json({ id: params.id, pw: params.pw })
})

export default router