var http = require("http");
var fs = require("fs");

function serveStaticFile(res, path, contentType, responseCode)
{
    if (!responseCode)
    {
        responseCode = 200;
    }

    fs.readFile(__dirname + path, function(error, data){
        if (error)
        {
            res.writeHead(500, {  "Content-Type" : "text/plain" } );
            res.end("500 - internal error!");
        }
        else
        {
            res.writeHead(500, {  "Content-Type" : contentType } );
            res.end(data);
        }
    });
}

http.createServer(function(req,res){

    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path)
    {
        case "":
        {
            serveStaticFile(res, "/public/home.html", "text/html");
            break;
        }
        case "/about":
        {
            serveStaticFile(res, "/public/about.html", "text/html");
            break;
        }
        default:
        {
            serveStaticFile(res, "/public/notfound.html", "text/html");
            break;
        }
    }

}).listen(3000);

console.log("server started on localhost:3000; press Ctrl+C to terminate...");