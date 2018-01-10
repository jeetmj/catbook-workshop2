const http = require('http');

const server = http.createServer(function(req, res) {
  res.send('Hello World!');
});

const port = 3000;
server.listen(port, function() {
  console.log('Server running on port: ' + port);
});)
