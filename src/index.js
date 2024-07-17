const bodyParser = require("./helpers/bodyParser");
const http = require("http");
const routes = require("./routes");
const url = require("url");

const port = 9090;
const log = console.log;

const server = http.createServer((request, response) => {
  
  const parsedUrl = url.parse(request.url, true);
  log(parsedUrl);

  log(`Request Method: ${request.method} and Request URL ${parsedUrl.pathname}`);

  let { pathname } = parsedUrl;
  let id = null;

  const splitedEndpoint = pathname.split("/").filter(routeItem => Boolean(routeItem));
  log(splitedEndpoint);

  if (splitedEndpoint.length > 1) {
    pathname = `/${splitedEndpoint[0]}/:id`;
    id = splitedEndpoint[1];
  }

  const route = routes.find(routeObj => routeObj.endpoint === pathname && routeObj.method === request.method);

  if (route) {
    request.query = parsedUrl.query;
    request.params = { id };

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { "Content-type": "application/json" });
      response.end(JSON.stringify(body));
    };

    if (["PUT", "POST", "PATCH"].includes(request.method)) {
      return bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }


  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

server.listen(port, log(`Server is running at: http://localhost:${port}`));
