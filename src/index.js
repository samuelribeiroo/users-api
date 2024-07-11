const http = require("http");
const users = require("./mockup/users");
const routes = require("./routes");
const UserController = require("./controllers/UserController");
const log = console.log;

const port = 9090;

const server = http.createServer((request, response) => {
  log(`Request Method: ${request.method} and Request URL ${request.url}`);

  const route = routes.find((routeObj) => {
    return (routeObj.endpoint === request.url && routeObj.method === request.method);
  });

  if (route) {
    route.handler(request, response);
  } else {
    UserController.errorHandling(request, response)
  }
  
});

server.listen(port, console.log(`Server is running at: http://localhost:${port}`));
