const log = console.log;
const http = require("http");

// Req and Res = Paremeters who'll be handling with request from users and response from server.
// In NodeJS applications we always working with 'HTTP METHODS'
// http methods are four: GET, POST, PUT AND DELETE
const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    if (req.method === "GET") {
      return res.end("The application its working");
    }
    // With frameworks like Express or NestJS the return of post method is always in .body and give an json.
    // In this  short tutorial we're using only node, so in this case the return will be in string
    if (req.method === "POST") {
      req.on("data", (data) => {
        log(JSON.parse(data));
      }); // Next step its save this data on new array
      return res.end("Route POST its working normally");
    }
  }
});

// Listen method is responsible to effectly create a server (server const its a function, so to work you need calling)
server.listen(8080, () => log("Server is running at PORT: 8080"));
