const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.write("Hello World!");
  } else if (req.url === "/about") {
    res.write("About Page");
  } else if (req.url === "/contact") {
    res.write("Contact Page");
  } else {
    res.write("It's empty here...");
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log("Server running at " + "http://" + hostname + ":" + port + "/");
});