// var http = require('http')

// const cb = (request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
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

var fs = require('fs')

const cb = (er,data) => {
    if(err) 
    console.error(err)
    console.log(data.toString())
}


// var data = fs.readFileSync('input.txt')
// console.log(data.toString())
fs.readFile('input.txt',cb)
console.log("Program end!")