//1

const os = require('os');
let os1 = os.type();
let os2 = os.uptime()
let os3 = os.userInfo().username;
const path = require('node:path');
let path1 = path.basename('\main.js');
let path2 = path.dirname('C:\ Intro')

const http = require('http')
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<h1>System information</h1>
    <p> Current user name: ${os3}</p> 
    <p> OS type: ${os1}</p>
    <p> System work time: ${os2} seconds</p>
    <p>Current work directory: ${path2} ${path1}</p>
    
    `);
    response.end()

}).listen(5000)

console.log('server is running on port 5000');
 

//2
const os4 = require('os');

let name = os4.userInfo().username;
const http1 = require('http')
let dates = require('./personalemodule')
let date =  new Date().toISOString()

// let time = date.getHours()

http1.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`
    <p>${date}</p>
    <p>${dates.userName(name)}</p>
    `);
    response.end()
}).listen(8000)

console.log('server is running on port 8000');

//3

// let path = './app.js'

// let fs = require('fs')
// let http4 = require('http')
// // fs.writeFile('app.js')
// function createFile (){
//     fs.writeFile('app.js', text)
// }
// http4.createServer(function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write();
//     response.end()
// }).listen(8080)
// console.log('server is running on port 8080');