import React from "react";
import ReactDom from "react-dom";
import TodoList from "../src/component/TodoList";
class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}
export default App;
