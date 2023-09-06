const express = require('express')
const router = express.Router()

const { shower } = require('../controller/public')

router.route("/").get(shower)


module.exports = router;

