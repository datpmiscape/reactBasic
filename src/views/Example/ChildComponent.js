import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log(">>> check props: ", this.props);
    let { name, age, job } = this.props;
    let a = "";
    return (
      <div className="jobList">
        <div>{name}</div>
        {
          (a = job.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            );
          }))
        }
        {console.log(">>> check map array: ", a)}
      </div>
    );
  }
}
export default ChildComponent;
