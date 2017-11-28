// var express = require('express');
// var fs = require('fs');

// var app = express();

// var jsonData = {
//     count: 12,
//     messeage: 'hey'
// };

// app.get('/', function(res, res) {

//     fs.readFile('index.html', function(err, buffer) {
//         console.log(buffer.toString());
//         var html = buffer.toString();
//         res.setHeader('Content-Type', 'text/html');
//         res.send(html);
//     });

//res.sendFile takes an absolute path to a file and
//sets the mime type based n the file extname

// res.sendFile(__dirname + '/index.html', function(err) {
//     if (err) {
//         res.status(500).send(err);
//     }
// })


// });

// app.get('/data', function(req, res) {
//     res.json(jsonData);
// });

// var port = 3000;

// app.listen(port, function() {
//     console.log('App running on ', port);
// });











/*
TODO Tasks:
-create a basic server with express
- that will send back the index.html file on a GET request to '/'
- it should then send back jsonData on a GET to /data
*/


//temporary database
var jsonData = { count: 12, message: 'hey' };



//set up express
var express = require('express');
var app = express();

// set up for serving static files
app.use(express.static(__dirname + "/index.html"))

//Route handling
app.get("/", function(req, res) {
    //recall that almost everything in node is async
    //so when the 1st arg finishes, 2nd arg(the cb) will get called
    res.sendFile(__dirname + "/index.html", function(err) { /*if i wanted*/ });
})

app.get("/data", function(req, res) {
    res.json(jsonData);
})

console.log(__dirname)


//listen on port
var port = 3000;
app.listen(port, function() {
    console.log(`listening on http://localhost:${port}`);
})