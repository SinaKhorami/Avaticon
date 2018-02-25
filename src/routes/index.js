import {
  Router
} from 'express'
import Avatars from './Avatars'

const router = Router()

router.use('/avatars', Avatars)

export default router
