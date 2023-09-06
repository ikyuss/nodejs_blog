const path = require('path')

function shower(req, res) {
    return res.sendFile(path.join(__dirname + "/views/index.html"))
}

module.exports = {
    shower,
}