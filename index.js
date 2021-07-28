const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.end("<h1>Hello Worlde</h1>");
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
