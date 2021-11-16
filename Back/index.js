const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//instiate
const app = express();

dotenv.config();

const usersRouter = require("./routers/routs/users");


//built in level middleware
app.use(cors());
app.use(express.json());
app.use("/users",usersRouter)



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
