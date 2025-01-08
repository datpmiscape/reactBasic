import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log(">>> check props: ", this.props);
    let { name, age } = this.props;
    return (
      <div>
        child component: {name} - {age}
      </div>
    );
  }
}
export default ChildComponent;
