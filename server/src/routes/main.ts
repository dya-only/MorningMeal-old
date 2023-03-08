import express from 'express'

import gbswAuth from './api/users/gbsw.auth'
import idpwAuth from './api/users/idpw.auth'

const router = express.Router()

router.use('/users/auth', idpwAuth)

export default router