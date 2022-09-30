import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Deccription can not be blank");
    }
    props.addtodo(title, desc);
  };

  return (
    <div className="container">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Todo Deccription
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            className="form-control"
            id="description"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
