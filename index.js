const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const axios = require('axios')
const model = require('./database/controllers.js')

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

app.get('/save', (req, res) => {
  model.retrieve().then((drink) => {
    res.send(drink)
  })
})

app.post('/save', (req, res) => {
  model.save(req.body)
  res.send('done')
})

app.delete('/save/:name', (req, res) => {
  let {name} = req.params
  console.log(name)
  model.delete(name)
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/')
)})

app.listen(4000, () => {console.log('Listening on port 4000')})

