const users = require("../mockup/users");

module.exports = {
  listAllUsers(request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(users));
  },

  errorHandling(request, response) {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${request.url}`);
  }
}