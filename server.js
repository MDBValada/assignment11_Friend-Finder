//Dependencies
//========================================================
var express = require("express")
var path = require("path")

//Sets up the Express App
//========================================================
var app = express();
//https://nameless-ravine-94070.herokuapp.com/
//required heroku environment variables
var PORT = process.env.PORT || 3000;


//Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());








//Starts the server to begin Listening
//========================================================
app.listen(PORT, function() {
    console.log(`App listening on port ${port}`)
});