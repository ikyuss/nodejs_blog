var http = require('http')
var fs = require('fs')
var url = require('url')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var q = url.parse(req.url, true).query
    const message = q.month + ' ' + q.year
    res.end(message)
    // fs.createReadStream(__dirname + '/index.html').pipe(res)
}).listen(9098)



// const cb = (request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' })
//     fs.createReadStream(__dirname + '/index.html')
//     response.end("Hello, world")
// }
// http.createServer(cb).listen(9098)

// // var obj = {
// //     MaSV: "123",
// //     HoTen: "Nguyen Hai Dang"
// // }

// // console.log(obj)
// // console.log(typeof(obj))

// // var obj2 = {
// //     MaSV: "456",
// //     HoTen: "Nguyen "
// // }
// // console.log(obj2)
// // console.log(obj)

//

// const cb = (er,data) => {
//     if(err)
//     console.error(err)
//     console.log(data.toString())
// }


// // var data = fs.readFileSync('input.txt')
// // console.log(data.toString())
// fs.readFile('input.txt',cb)
// console.log("Program end!")