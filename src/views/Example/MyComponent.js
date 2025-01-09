import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "job01", title: "Developers", salary: "800" },
      { id: "job02", title: "Testers", salary: "700" },
      { id: "job03", title: "Project managers", salary: "2000" },
    ],
  };

  render() {
    return (
      <>
        <AddComponent />
        <ChildComponent job={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
