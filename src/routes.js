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

  {
    endpoint: "/users",
    method: "POST",
    handler: UserController.onCreateUser,
  },

  {
    endpoint: "/users/:id",
    method: "PUT",
    handler: UserController.updateUser,
  },

  {
    endpoint: "/users/:id",
    method: "DELETE",
    handler: UserController.deleteUser,
  },
];
