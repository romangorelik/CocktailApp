const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

let app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/client/dist/'))

app.get('/', (req, res) => {
  res.send('Server working')
})

app.listen(4000, () => {console.log('Listening on port 4000')})