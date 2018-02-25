import fs   from 'fs'
import path from 'path'

const DEFAULT_RESOURCE_DIR = path.join(__dirname, '..', 'resources')

const getDirectory = (facePartType) => path.join(DEFAULT_RESOURCE_DIR, facePartType)

export const getPath = (facePartType, fileName) => path.join(getDirectory(facePartType), fileName)

export const getFilesName = (facePartType) => (
  fs.readdirSync(getDirectory(facePartType))
    .filter((fileName) => (
      fileName.match(/\.png/)
    ))
)
