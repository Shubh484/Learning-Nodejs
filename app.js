const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // '/' denotes home page
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">get back home</a>`);
});

server.listen(4000); // go chech at localhost:4000 on web browser for response
