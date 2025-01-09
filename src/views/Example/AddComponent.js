import React from "react";
import "./Demo.scss";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangeJobTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
    } else {
      this.props.addNewJob({
        id: Math.floor(Math.random() * 100) + 1,
        title: this.state.title,
        salary: this.state.salary,
      });
      this.setState({
        title: "",
        salary: "",
      });
    }
  };

  render() {
    return (
      <form>
        <label htmlFor="jobtitle">Job's title: </label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeJobTitle(event)}
        />
        <br />
        <label htmlFor="salary">Salary: </label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <input
          className="btnSubmit"
          type="submit"
          onClick={(event) => this.handleSubmit(event)}
        />
        <br />
        <br />
      </form>
    );
  }
}
export default AddComponent;
