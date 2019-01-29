// ===============================================================================
// DEPENDENCIES
// Don't forget you need to require path to find paths!
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // HTML GET Requests
  // Below code handles where users go when they "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //Intentional route to get to survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // Default route when nothing else matches send them to home.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));

  })};