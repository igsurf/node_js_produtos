var http = require("http");
var porta = 3000;
var ip = "localhost";

http
  .createServer(function(req, res) {
    console.log("Recebendo Request");
    if ((req.url = "/produtos")) {
      res.end("<html><body>Listagem de Produtos!</body></html>");
    } else {
      res.end("<html><body>Request Recebido!</body></html>");
    }
  })
  .listen(porta, ip);
console.log("Server running at http://" + ip + ":" + porta + "/");
