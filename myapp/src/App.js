// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Navbar";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";
import React, { useEffect, useState } from "react";
function App() {
  let intiTodo;
  if (localStorage.getItem("todos") === null) {
    intiTodo = [];
  } else {
    intiTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addtodo = (title, desc) => {
    console.log("i am adding todolist", title, desc);
    let sr_no = todos.length + 1;
    const MyTodo = {
      sr_no: sr_no,
      title: title,
      desc: desc,
    };
    settodos([...todos, MyTodo]);
    console.log(MyTodo);
  };

  const [todos, settodos] = useState([intiTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const onDelete = (todo) => {
    console.log("i am ondelete of todo", todo);
    settodos(
      todos.filter((del) => {
        return del !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  return (
    <>
      <Header title="Todos-List" SearchBar={false} />
      <AddTodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
