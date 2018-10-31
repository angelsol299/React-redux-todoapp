import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "get veggies" },
      { id: 2, content: "learn to code" }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <Navbar />
        <h1 className="center green-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
