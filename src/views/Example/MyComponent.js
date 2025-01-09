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

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
    console.log(">>> check new job: ", job);
  };

  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent jobs={this.state.arrJobs} deleteJob={this.deleteJob} />
      </>
    );
  }
}

export default MyComponent;
