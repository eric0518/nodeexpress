var express = require("express");
var app = express();

var handlebars = require("express3-handlebars").create({
    defaultLayout:"main"
});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

// app.set("port", process.env.port || 5000);


app.get("/", function(req, res){
    // res.type("text/plain");
    // res.send("Meadowlark Travel.");

    res.render("home");
});

app.get("/about", function(req, res){
    // res.type("text/plain");
    // res.send("About Meadowlark Travel.");

    res.render("about");
});

app.use(function(req, res, next){
    // res.type("text/plain");
    // res.status(404);
    // res.send("404 - Not Found.");

    res.status(404);
    res.render("404");
});


app.use(function(req, res, next){
    res.status(500);
    res.render("500");
})


// app.listen(app.get("port"), function(){
//     console.log("Express started on localhost:" + app.get("port") + "; press Ctrl+C to terminate......");
// });

module.exports = app;