const http = require("http");
const users = require("./mockup/users");
const log = console.log;

const server = http.createServer((request, response) => {
  log(`Request Method: ${request.method} and Request URL ${request.url}`);
  if (request.method === "GET" && request.url === "/users") {
    response.writeHead(200, { "Content-Type": "application/json" });
    // The end method always need receive a string
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${request.url}`);
  }
});

server.listen(9090, console.log("Server its running!"));
