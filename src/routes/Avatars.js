import {
  Router
} from 'express'
import _ from 'lodash'

import {
  Imager,
  Constants,
  ResourceManager
} from '../utilities'

const router = Router()

router.get('/', (req, res) => {
  let faceParts = {}

  _.assign(faceParts, { color: _.sample(Constants.Colors), size: Constants.DefaultSize })

  _.forEach(Constants.FacePartsList, (type) => {
    _.assign(faceParts, { [type]: ResourceManager.getPath(type, _.sample(ResourceManager.getFilesName(type))) })
  })

  Imager.facePartsCombiner(faceParts, (err, stdout) => {
    if (err) return res.status(500).send()

    res.set('Content-Type', 'image/png')
    stdout.pipe(res)
  })
})

export default router
