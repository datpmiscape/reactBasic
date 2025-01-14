import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleAddTodoInput = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodoSubmit = () => {
    if (!this.state.title) {
      toast.error("Missing title!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="addTodo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleAddTodoInput(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodoSubmit()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
