const UserController = require("./controllers/UserController");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: UserController.listAllUsers,
  },

  {
    endpoint: "/users/:id",
    method: "GET",
    handler: UserController.getUsersById,
  },

];
