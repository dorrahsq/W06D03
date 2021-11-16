import React from "react";


const Todo  =(props)=>{

    return (
      <>
        <li>
          {props.todos.name}
          <span onClick={() => props.deletitem(props.todos.todoId)}>
            X
          </span>
          <i onClick={()=> props.editeitem(props.todos.todoName)}> edite</i>
        </li>
      </>
    );
  }

export default Todo;