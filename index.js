const log = console.log;
const http = require("http");

// Req and Res = Paremeters who'll be handling with request from users and response from server.
// Always prefer use 'Request' and 'Response' instead use 'req and res' respectively
// In NodeJS applications we always working with 'HTTP METHODS'
// http methods are four: GET, POST, PUT AND DELETE
const server = http.createServer((request, response) => {
  if (request.url === "/users") {
    if (request.method === "GET") {
      return response.end("The application its working");
    }
    // With frameworks like Express or NestJS the return of post method is always in .body and give an json.
    // In this  short tutorial we're using only node, so in this case the return will be in string
    if (request.method === "POST") {
      req.on("data", (data) => {
        log(JSON.parse(data));
      }); // Next step its save this data on new array
      return response.end("Route POST its working normally");
    }
  }
});

// Listen method is responsible to effectly create a server (server const its a function, so to work you need calling)
server.listen(8080, () => log("Server is running at PORT: 8080"));
