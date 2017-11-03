var http = require('http');
var porta = 3000;
var ip = 'localhost';

var server = http.createServer(function(req, res) {
  console.log("Recebendo Request");
  res.writeHead (  200, { 'Content-Type': 'text/html' });
  res.end ('<html><body>Request Recebido!</body></html>');
});

server.listen(porta, ip);
console.log("Server running at http://" + ip + ":" + porta + "/");
