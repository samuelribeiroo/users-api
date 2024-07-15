const users = require("../mockup/users");

module.exports = {
  listAllUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === "desc") {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    });
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(sortedUsers));
  },

  isInvalidRequest(request, response) {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${request.url}`);
  },

  getUsersById(request, response) {
    const { id } = request.params;

    const user = users.find((user) => user.id === +id);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(user));
  },
};
