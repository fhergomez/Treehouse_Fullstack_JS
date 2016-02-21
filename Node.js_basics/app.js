var profile = require("./profile.js");

var username = "fernandogomez";
var users = ["fernandogomez","chalkers"];

users.forEach(profile.get);
profile.get(username);
