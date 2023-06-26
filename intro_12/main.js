

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
// const http1 = require('http')
// http1.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write();
//     response.end()
// }).listen(8000)

// console.log('server is running on port 8000');




