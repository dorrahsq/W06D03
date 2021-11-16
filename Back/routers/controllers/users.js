const fs = require("fs");

let users = [];

// read file
fs.readFile("./db/users.json", (err, data) => {
  if (err) {
    console.log("err read", err);
  } else {
    users = JSON.parse(data.toString());
  }
});

//write on file
const addToFileFunction = (users) => {
  fs.writeFile("./db/users.json", JSON.stringify(users), (err) => {
    console.log("err write", err);
  });
};

//try
const getAllUsers = (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    console.log("error", error);
  }
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

//read todos
const getAllTodo = (req, res) => {
  const { id } = req.body;
  const theUser = users.filter((ele) => {
    return ele.id == id;
  });
  res.json(theUser[0].todos);
};

//create todo
const createTodo = (req, res) => {
  const { id, todoId, todoName } = req.body;
  const theUser = users.filter((ele) => {
    return ele.id == id;
  });
  console.log(theUser);
  theUser[0].todos.push({ todoId, todoName });
  addToFileFunction(users);
  res.json(users);
};

//delete todo
const deleteTodo = (req, res) => {
  const { id, todoId } = req.body;
  const theUser = users.filter((ele) => {
    return ele.id == id;
  });
  let indexx = theUser[0].todos.forEach((element, i) => {
    if (element.todoId == todoId) {
      console.log(i, "here");
      theUser[0].todos.splice(i, 1);
    }
  });
  addToFileFunction(users);
  res.json(users);
};

//update todo
const updateTodo = (req, res) => {
  const { id, todoId, newTodoName } = req.body;
  const theUser = users.filter((ele) => {
    return ele.id == id;
  });
  let indexx = theUser[0].todos.forEach((element, i) => {
    if (element.todoId == todoId) {
      console.log(i, "here");
      let newT = { todoId: todoId, todoName: newTodoName };
      theUser[0].todos.splice(i, 1, newT);
    }
  });
  addToFileFunction(users);
  res.json(users);
};

module.exports = {
  getAllUsers,
  addNewUser,
  getAllTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
