var router = require("./router.js");
var bcrypt = require('bcrypt');
var server = require('http-server');
var colors = require('colors');
//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

// to use for bcrypt
var unsecurePlainTextPassword = "password"

// to hash a password
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
      console.log(hash.green);
        // Store hash in your password DB.
    });
});

//Create a web server
var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(8080);
console.log('Server running at http://<workspace-url>/');


//Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values in to string











