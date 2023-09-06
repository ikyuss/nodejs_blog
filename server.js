const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

const routerConfig = require('./router/index')

app.use("/", routerConfig);
// app.get('/', (req, res) => {
//     return res.sendFile(path.join(__dirname + "/views/index.html")
//     )
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

