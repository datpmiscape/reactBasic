import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Fixing bugs" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    // let currentListTodo = this.state.listTodos
    // currentListTodo.push(todo)
    this.setState({
      listTodos: [...this.state.listTodos, todo],
      // listTodos: currentListTodo
    });
    toast.success("Adding succeed!");
  };
  handleRemoveTodo = (todo) => {
    let currentListTodo = this.state.listTodos;
    currentListTodo = currentListTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentListTodo,
    });
    toast.success("Removing succeed!");
  };
  handleEditTodo = (todo) => {
    let { listTodos, editTodo } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;
    if (isEmptyObject === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Editing succeed!");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;
    return (
      <div className="listTodoContainer">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="listTodoContent">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todoChild" key={item.id}>
                  {isEmptyObject === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : editTodo.id === item.id ? (
                    <span>
                      {index + 1} -
                      <input
                        value={editTodo.title}
                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                      />
                    </span>
                  ) : (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  )}
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObject === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button onClick={() => this.handleRemoveTodo(item)}>
                    Remove
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
