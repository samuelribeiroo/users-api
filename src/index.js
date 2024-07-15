const http = require("http");
const routes = require("./routes");
const url = require("url");

const port = 9090;
const log = console.log;

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  log(parsedUrl);

  log(
    `Request Method: ${request.method} and Request URL ${parsedUrl.pathname}`
  );

  const route = routes.find(
    (routeObj) =>
      routeObj.endpoint === parsedUrl.pathname &&
      routeObj.method === request.method
  );

  if (route) {
    request.query = parsedUrl.query;
    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

server.listen(port, log(`Server is running at: http://localhost:${port}`));
