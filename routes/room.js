var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Room = require('../models/Room')

// Get
router.get('/', function (req, res, next) {
  Room.find(function (err, rooms) {
    if (err) return next(err)
    res.json(rooms)
  })
})

// Show
router.get('/:id', function (req, res, next) {
  Room.findById(req.params.id, function (err, room) {
    if (err) return next(err)
    res.json(room)
  })
})

// Create
router.post('/', function (req, res, next) {
  Room.create(req.body, function (err, room) {
    if (err) return next(err)
    res.json(room)
  })
})

// Update
router.put('/:id', function (req, res, next) {
  Room.findByIdAndUpdate(req.params.id, req.body, function (err, room) {
    if (err) return next(err)
    res.json(room)
  })
})

// Delete
router.delete('/:id', function (req, res, next) {
  Room.findByIdAndRemove(req.params.id, req.body, function (err, room) {
    if (err) return next(err)
    res.json(room)
  })
})

module.exports = router
