import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "job01", title: "Developers", salary: "800" },
      { id: "job02", title: "Testers", salary: "700" },
      { id: "job03", title: "Project managers", salary: "2000" },
    ],
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check state: ", this.state);
  };
  render() {
    // let nameP = "DatPMiScape";
    return (
      <>
        <form>
          <label htmlFor="fname">First name: {this.state.firstName}</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name: {this.state.lastName}</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
          <br />
          <br />
        </form>
        <ChildComponent
          name={this.state.firstName}
          age={"25"}
          job={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
