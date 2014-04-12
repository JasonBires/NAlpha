var http = require('http');

var options = {
  host: 'localhost',
  port: 8080,
  path: '/hello/Jackson'
};

http.get(options, function(res) {   
    console.log("Got response: " + res.statusCode);
    res.on("data", function(chunk) {
        console.log("Body: " + chunk);
    });    
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
