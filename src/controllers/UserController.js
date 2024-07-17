let users = require("../mockup/users");

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

    const user = users.find((user) => user.id === +id);

    if (!user) {
      return response.send(400, { message: "User not found." });
    }

    response.send(200, user);
  },

  onCreateUser(request, response) {
    const { body } = request;

    const lastUserID = users[users.length - 1].id;

    const newUser = {
      id: lastUserID + 1,
      name: body.name,
    };

    users.push(newUser);

    response.send(200, newUser);
  },

  updateUser(request, response) {
    let { id } = request.params;
    const { name } = request.body;

    // ID at mockup used is a string but we need here in format of number (id = Number(id) is same thing to id = +id)
    id = +id;

    const userAlreadyExist = users.find(users => users.id === id);

    if (!userAlreadyExist) {
      return response.send(400, { error: "User Not Found." });
    }

    users = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          name,
        };
      }

      return user;
    });

    response.send(200, { id, name });
  },

  deleteUser(request, response) {
    let { id } = request.params;
    id = +id;

    users = users.filter(user => user.id !== id);

    response.send(200, { deleted: true })
  },
};
