import React from "react";

class AddComponent extends React.Component {
  state = {
    jobTitle: "",
    salary: "",
  };

  handleChangeJobTitle = (event) => {
    this.setState({
      jobTitle: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form>
        <label htmlFor="jobtitle">Job's title: {this.state.jobTitle}</label>
        <br />
        <input
          type="text"
          value={this.state.jobTitle}
          onChange={(event) => this.handleChangeJobTitle(event)}
        />
        <br />
        <label htmlFor="salary">Salary: {this.state.salary}</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        <br />
        <br />
      </form>
    );
  }
}
export default AddComponent;
