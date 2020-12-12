import React, { Component, useState } from "react";
import "./styles.css";
import "tachyons";
import Form from "./component/Form";
import firebase from "./util/firebase";
import TodoList from "./component/TodoList";
export default function App() {
  const [todoList, setTodoList] = useState();
  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push(todos[id]);
      }
      console.log(todoList);
      setTodoList(todoList);
    });
  }, []);

  {
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <Form />
        <TodoList todoList={todoList} />
      </div>
    );
  }
}
