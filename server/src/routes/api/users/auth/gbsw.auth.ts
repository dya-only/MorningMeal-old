import express from "express"
import jwt from 'jsonwebtoken'

const router = express.Router()
const port = process.env.port || 8080
const log = console.log

const CLIENT_ID = 'f0c1f28d-6f92-4372-ad29-08fa835e56ac'
const SCOPES = 'openid real_name class_info'
const REDIRECT_URI = `http://localhost:${port}/users/auth/callback`
const NONCE = 'kawaii'
const LOGIN_URL =
  'https://center.gbsw.hs.kr/login' +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${REDIRECT_URI}` +
  `&scope=${SCOPES}` +
  `&nonce=${NONCE}` +
  `&response_type=id_token`

router.route('/').get(async (req, res) => {
  await fetch(LOGIN_URL, {
    method: "GET",
  }).then(async (resp) => { res.status(200).send(resp) })
})

router.route('/callback').get((req, res) => {
  const params = req.query as any
  const decoded = jwt.decode(params.id_token)

  res.send(JSON.stringify(decoded, null, 2))
})

export default router