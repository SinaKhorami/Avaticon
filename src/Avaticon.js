import express from 'express'
import routes  from './routes'

const app = express()

app.use(routes)

app.listen(3939, () => {
  console.log('\x1b[32m%s\x1b[0m', 'Avaticon server is running')
  console.log('http://localhost:3939/avatars')
})
