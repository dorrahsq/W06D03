const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const usersRouter = require("./routers/routs/users");

//instatiate
const app = express();
dotenv.config();

//built in level middleware
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
