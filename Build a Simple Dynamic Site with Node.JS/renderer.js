var fs = require('fs');

function mergeValues(values,content) {
  //Cycle over the keys
  for (var key in values) {
    //Replace all {{key}} with the value from the values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  //return merged content
  return content;
}

function view(templateName, values, response) {
  // Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf-8"});
  // Insert values in to the content
  fileContents = mergeValues(values, fileContents);
  // write out to the response
  response.write(fileContents);
}

module.exports.view = view;