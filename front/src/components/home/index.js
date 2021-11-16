import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Todos from "../todos";

const BASE_URL = "http://localhost:5000";

const Home = () => {
  const [users, setusers] = useState([]);
  const [AddinputSignvalue, setAddinputSignvalue] = useState("");
  const [AddinputSignPass, setAddinputSignPass] = useState("");
  //tow enough.....
  const [AddinputLogvalue, setAddinputLogvalue] = useState("");
  const [AddinputLogPass, setAddinputLogPass] = useState("");
  const [todoarray, settodoarray] = useState([]);
  const [text, setText] = useState("Welcome to the best todo-list website");

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/users`);
    setusers(users.data);

    // settodos(users.data.todos)
    // console.log(users.data);
    // console.log(users.data.todos);
  };
  let userId = JSON.parse(localStorage.getItem("userId"));
  console.log(userId);
  {
    console.log(todoarray);
  }

  const createNew = () => {
    //   console.log("create");
    let obj = {
      id: users.length + 1,
      email: AddinputSignvalue,
      password: AddinputSignPass,
    };
    axios
      .post(`${BASE_URL}/users/addNew`, obj)
      .then(() => console.log(" User Created "))
      .catch((err) => {
        console.error(err);
      });
    console.log(users);
  };

  const logOut = () => {
    localStorage.clear();
    console.log("log out");
    window.location.reload(false);
  };

  return (
    <>
      <p className="change"> {text} </p>
      {userId ? (
        <>
          {console.log(todoarray)}

          {todoarray.forEach((ele) => {
            console.log("hh");
            console.log(ele.todoName);
          })}

          {/* <h1>To Do list</h1>
        <form onSubmit={createNewTodo}>
          <ul>
            {todoarray.map((item, i) => (
                <Todo  todos={item}  key={i} editeitem={editeitem}  deletitem={deletitem}  /> 
              ) 
            )}
          </ul>
          <input type="text" name="inside" />
          <button>add </button>
        </form> */}

          <button onClick={logOut} className="userBtnL">
            {" "}
            log out{" "}
          </button>
        </>
      ) : (
        <div className="contenerB">
          <div className="firstDiv">
            <button
              className="userBtn"
              onClick={() => {
                //check if the user existe in database
                let found = users.find((ele) => {
                  return ele.email == AddinputSignvalue;
                });

                if (found) {
                  return (
                    <p className="accountText">
                      {setText(
                        "This email already have an account! log in or change your email"
                      )}
                    </p>
                  );
                } else {
                  localStorage.setItem(
                    "userId",
                    JSON.stringify(users.length + 1)
                  );
                  createNew();
                  window.location.reload(false);
                }
              }}
            >
              {" "}
              sign up
            </button>

            <input
              className="inputt1"
              onChange={(e) => {
                setAddinputSignvalue(e.target.value);
              }}
              type="text"
              placeholder="enter your email"
            />
            <input
              className="inputt1"
              onChange={(e) => {
                setAddinputSignPass(e.target.value);
              }}
              type="password"
              placeholder="enter your password"
            />
          </div>

          <div className="secondDiv">
            <button
              className="userBtn"
              onClick={() => {
                let found = users.find((ele) => {
                  return ele.email == AddinputLogvalue;
                });
                if (found) {
                  if (found.password == AddinputLogPass) {
                    localStorage.setItem("userId", JSON.stringify(found.id));
                    settodoarray(found.todos); ////////////////////////////////////////ss
                    console.log("your in ");
                    window.location.reload(false);
                  } else {
                    {
                      setText("Password incorrect ");
                    }
                  }
                } else {
                  {
                    setText("you don't have an acount, sign up and join us");
                  }
                }
              }}
            >
              log in
            </button>
            <input
              className="inputt2"
              onChange={(e) => {
                setAddinputLogvalue(e.target.value);
              }}
              type="text"
              placeholder="enter your email"
            />
            <input
              className="inputt2"
              onChange={(e) => {
                setAddinputLogPass(e.target.value);
              }}
              type="password"
              placeholder="enter your password"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
