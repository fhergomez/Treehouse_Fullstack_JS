// Problem: We need a simple way to look up a user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

//1. create a web server.
const http = require('http');

const hostname = 'localhost';
const port = 3000;

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  setInterval(function(){
    response.write(new Date() + "\n");
  },1000 );
  //response.end('Hello World\n');
}).listen(port);
  console.log('Server running at http://<workspace-url>/');

//2. handle HTTP route GET / and POST / i.e. Home
  //if url == "/" && GET
    //show search
  //if url == "/" && Post
    //redirect to /:username

//3. handle HTTP route GET /:username i.e. /chalkers
  //if url == "/...."
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error

//4. Function that handles the reading of files and merge in value
  //read from file and get a string
    //merge values in to string