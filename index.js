var request = require("request");
var fs = require("fs");

request
  .get("https://sytantris.github.io/http-examples/future.jpg")
  .on("error", function(err) {
    throw err;
  })
  .on("response", function(response) {
    console.log("Downloading Image...");
    console.log("Response Status Code: ", response.statusCode);
    console.log("Status Message: " + response.statusMessage);
    console.log("Content Type: " + response.headers["content-type"]);
  })
  .pipe(fs.createWriteStream("./requests-using-request/future.jpg"))
  .on("close", () => {
    console.log("Image Download Complete...");
  });
