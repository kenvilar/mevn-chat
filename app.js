var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var bodyParser = require('body-parser')

var room = require('./routes/room')
var chat = require('./routes/chat')
var app = express()

var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/mevn-chat', {
  useNewUrlParser: true,
  promiseLibrary: require('bluebird')
}).then(() => console.log('connection successful'))
  .catch((err) => console.error(err))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended': 'false'}))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/rooms', express.static(path.join(__dirname, 'dist')))
app.use('/api/room', room)
app.use('/api/chat', chat)

// this will catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found!')
  err.status = 404
  next(err)
})

// create error handler
app.use(function (err, req, res) {
  res.locals.message = err.message
  res.local.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
