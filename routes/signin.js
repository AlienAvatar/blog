const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// POST /signin 用户登录
router.post('/', checkNotLogin, function (req, res, next) {
    res.send('登录')
})

router.get('/', checkNotLogin, function (req, res, next) {
    res.render('signin')
})

module.exports = router