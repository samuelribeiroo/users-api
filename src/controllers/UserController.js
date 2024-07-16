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

    response.send(200, sortedUsers);
  },
  
  getUsersById(request, response) {
    const { id } = request.params;

    const user = users.find(user => user.id === +id);

    if (!user) {
      return response.send(400, { message: "User not found." });
    }

    response.send(200, user);
  },
};
