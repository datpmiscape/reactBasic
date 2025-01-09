import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleDeleteJob = (job) => {
    this.props.deleteJob(job);
  };

  render() {
    let { jobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <div>
            <div className="jobList">
              {jobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}{" "}
                    <span>
                      <button onClick={() => this.handleDeleteJob(item)}>
                        Delete
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default ChildComponent;
