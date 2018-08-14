var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Chat = require('../models/Chat')

// Get
router.get('/', function (req, res, next) {
  Chat.find(function (err, products) {
    if (err) return next(err)
    res.json(products)
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
