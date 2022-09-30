import React from "react";
import TodoItems from "./TodoItems";
const Todos = (props) => {
  let mystyle={
    minHeight:"57vh",
    margin:"40px auto"
  }
  return (
    <div className="container " style={mystyle}>
      <h3 className="text-center">Todos List</h3>
      {props.todos.length !== 0
        ? props.todos.map((todo) => {
            return (
              <>
              <TodoItems
                todo={todo}
                key={todo.sr_no}
                onDelete={props.onDelete}
              /> <hr/>
              </>
            );
          })
        : "No todos list"}
    </div>
  );
};

export default Todos;
