import React from "react";

const TodoItems = (props) => {
  return (
    <div>
      {/* <h5>{props.todo.sr_no}</h5> */}
      <h3>{props.todo.title}</h3>
      <p>{props.todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  );
};

export default TodoItems;
