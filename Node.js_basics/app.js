// Problem: we need a simple way to look at a user's badge count and JS points
// Solution: use node.js to connect to treehouse's API to get profile information to print out

var http = require("https");
var username = "fernandogomez";

// function printMessage(username, badgeCount, points) {
//   var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
//   console.log(message);
// };

// connect to the API URL (://teamtreehouse.com/username.json)
var request = http.get("https://teamtreehouse.com/" + username + ".json", function(response){
    var body = "";
    // read the data
    response.on("data", function(data){
      body += data;
    });
    response.on("end", function(){
      console.log(body);
      console.log(typeof body);
    });
});

request.on("error",function(error){
  console.error(error.message);
})


// parse the data
// print the data