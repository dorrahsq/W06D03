const express = require("express");

const { getAllUsers, addNewUser } = require("./../controllers/users");

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

usersRouter.post("/addNew", addNewUser);

module.exports = usersRouter;
