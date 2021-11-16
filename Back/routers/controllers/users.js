const fs = require("fs");

let users = [];

// read file
fs.readFile("./db/users.json", (err, data) => {
  users = JSON.parse(data.toString());
});

//write on file
const addToFileFunction = (users) => {
  fs.writeFile("./db/users.json", JSON.stringify(users), () => {});
};

//try
const getAllUsers = (req, res) => {
  res.json(users);
};

//add a new user
const addNewUser = (req, res) => {
  const user = {
    id: req.body.id,
    email: req.body.email,
    password: req.body.password,
    todos: [],
  };
  users.push(user);
  addToFileFunction(users);
  res.json(users);
};

module.exports = { getAllUsers, addNewUser };
