var express = require('express')
var router = express.Router()

/*
 * Home Page
 * */
router.get('/', function (req, res) {
  res.send('Express RESTful API')
})

module.exports = router
