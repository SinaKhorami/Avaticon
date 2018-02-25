import gm from 'gm'

const imageMagick = gm.subClass({ imageMagick: true })

export const facePartsCombiner = (face, callback) => {
  imageMagick()
    .quality(0)
    .append(face.eyes)
    .append(face.nose)
    .append(face.mouth)
    .background(face.color)
    .mosaic()
    .resize(face.size.width, face.size.height)
    .trim()
    .gravity('Center')
    .extent(face.size.width, face.size.height)
    .stream('png', callback)
}
