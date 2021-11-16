const express = require("express");

const {
  getAllUsers,
  addNewUser,
  getAllTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("./../controllers/users");

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

usersRouter.post("/addNew", addNewUser);

usersRouter.get("/getAllTodo", getAllTodo);

usersRouter.put("/createTodo", createTodo);

usersRouter.put("/deleteTodo", deleteTodo);

usersRouter.put("/updateTodo", updateTodo);

module.exports = usersRouter;
