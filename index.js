const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const axios = require('axios')

let app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/client/dist/'))

app.get('/', (req, res) => {
  res.send('Server working')
})

app.post('/search/:liquour', (req, res) => {
  let { liquour } = req.params
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${liquour}`) 
    .then(response => {
      console.log(response.data.drinks)
      res.send(response.data.drinks)
    })
    .catch(err => console.error(err))
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/')
)})

app.listen(4000, () => {console.log('Listening on port 4000')})
