// Problem: we need a simple way to look at a user's badge count and JS points
// Solution: use node.js to connect to treehouse's API to get profile information to print out

var https = require("https");
var http = require("http");


// print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
};

//print out error messages
function printError(error) {
  console.error(error.message);
};

function getProfile(username){
  // connect to the API URL (://teamtreehouse.com/username.json)
  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
    var body = "";
    // read the data
    response.on("data", function(data){
      body += data;
    });
    response.on("end", function(){
      if(response.statusCode === 200) {
        try {
          // parse the data
          var profile = JSON.parse(body);
          // print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
          // console.dir(profile);
        } catch(error) {
          // parse error
          printError(error);
        }
      } else {
        // Status Code
        printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });

  // Connection error
  request.on("error", printError);
};






module.exports.get = getProfile;

