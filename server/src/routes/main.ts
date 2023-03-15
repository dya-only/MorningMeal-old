import express from 'express'

// import gbswAuth from './api/users/auth/gbsw.auth'
import idpwAuth from './api/users/auth/idpw.auth'
import newAuth from './api/users/auth/new.auth'

import imgData from './api/users/data/img.data'

const router = express.Router()

router.use('/users/auth', idpwAuth)
router.use('/users/new', newAuth)

router.use ('/users/data', imgData)

export default router