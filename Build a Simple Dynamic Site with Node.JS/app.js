var router = require("./router.js");
// Problem: We need a simple way to look up a user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

// create a web server.
var http = require('http');
const hostname = 'localhost';
const port = 3000;

http.createServer(function (request, response) {
  router.home(request,response);
  router.user(request,response);
  //response.end('Hello World\n');
}).listen(port);
  console.log('Server running at http://<workspace-url>/');

// Function that handles the reading of files and merge in value
  //read from file and get a string
    //merge values in to string