const http = require("http");
const log = console.log;
const routes = require("./routes");
const { isInvalidRequest } = require("./controllers/UserController");

const port = 9090;

const server = http.createServer((request, response) => {
  log(`Request Method: ${request.method} and Request URL ${request.url}`);

  const route = routes.find(routeObj => routeObj.endpoint === request.url && routeObj.method === request.method);

  if (route) {
    route.handler(request, response);
  } else {
    isInvalidRequest(request, response)
  }  
});

server.listen(port, console.log(`Server is running at: http://localhost:${port}`));
