import express from 'express'

import gbswAuth from './api/gbsw.auth'

const router = express.Router()

router.use('/auth/gbsw', gbswAuth)

export default router