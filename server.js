//https://nameless-ravine-94070.herokuapp.com/
//Dependencies
//========================================================
var express = require("express")
var path = require("path")

//Sets up the Express Server in Node.js
//========================================================
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;


//Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());



//Primary Routing
require("./app/routing/apiRoutes")(app);



require("./app/routing/htmlRoutes")(app);

 

//Starts the server to begin Listening
//========================================================
app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`)
});