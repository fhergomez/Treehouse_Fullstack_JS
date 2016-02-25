var fs = require('fs');

function view(templateName, values, response) {
  // Read from the template file
  fs.readFile('./views/' + templateName + '.html', function(error, fileContents) {
    if (err) throw err;
    // Insert values in to the content

    // write out to the response
    response.write(fileContents);
  });
}

module.exports.view = view;