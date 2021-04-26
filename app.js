var express = require('express')
var app = express()
var request = require('request')

app.set("view engine", "ejs")
app.get('/', function(req, res) {
    res.render("search")
})
app.get("/test", function(req, res){
        res.send('test')
    }
    // res.send('hello')
)

// set port/IP
app.listen(5555, process.env.IP, function () {
    console.log("listening on port " + 5555);
    console.log("App start!!!");
});
