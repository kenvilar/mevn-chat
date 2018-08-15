var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var Chat = require('../models/Chat')

server.listen(4000)

io.on('connection', function (socket) {
  console.log('User connected')
  socket.on('disconnect', function () {
    console.log('User disconnected')
  })
  socket.on('save-message', function (data) {
    console.log(data)
    io.emit('new-message', {message: data})
  })
})

// Get
router.get('/:roomid', function (req, res, next) {
  Chat.find({
    room: req.params.roomid
  }, function (err, chats) {
    if (err) return next(err)
    res.json(chats)
  })
})

// Show
router.get('/:id', function (req, res, next) {
  Chat.findById(req.params.id, function (err, chat) {
    if (err) return next(err)
    res.json(chat)
  })
})

// Store
router.post('/', function (req, res, next) {
  Chat.create(req.body, function (err, chat) {
    if (err) return next(err)
    res.json(chat)
  })
})

// Update
router.put('/:id', function (req, res, next) {
  Chat.findByIdAndUpdate(req.params.id, req.body, function (err, chat) {
    if (err) return next(err)
    res.json(chat)
  })
})

// Delete
router.delete('/:id', function (req, res, next) {
  Chat.findByIdAndRemove(req.params.id, req.body, function (err, chat) {
    if (err) return next(err)
    res.json(chat)
  })
})

module.exports = router
