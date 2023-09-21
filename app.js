const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const db = require('./models')

const app = express()

app.use(bodyParser.json())

app.use('/', routes)

const port = process.env.PORT || 3000

// 配置 Sequelize，同步模型
db.sequelize.sync()
  .then(() => {
    console.log('Sequelize models synced successfully')
  })
  .catch((error) => {
    console.error('Sequelize sync error:', error)
  })


app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})

module.exports = app