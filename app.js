const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.write("welcome to our home page");
  res.end();
});

server.listen(4000); // go chech at localhost:4000 on web browser for response
