import express from 'express'

// import gbswAuth from './api/users/auth/gbsw.auth'
import idpwAuth from './api/users/auth/idpw.auth'
import newAuth from './api/users/auth/new.auth'

const router = express.Router()

router.use('/users/auth', idpwAuth)
router.use('/users/new', newAuth)

export default router