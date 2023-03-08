import express from "express"

const router = express.Router()

router.route('/').get((req, res) => {
  res.status(200).send('gbsw auth api')
})

export default router