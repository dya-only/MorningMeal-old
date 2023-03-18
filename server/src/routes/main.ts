import express from 'express'

import idpwAuth from './api/users/auth/idpw.auth'
import newAuth from './api/users/auth/new.auth'

import imgData from './api/users/data/img.data'
import setData from './api/users/data/set.data'

const router = express.Router()

router.use('/users/auth', idpwAuth)
router.use('/users/new', newAuth)

router.use ('/users/data', imgData)
router.use ('/users/set', setData)

export default router