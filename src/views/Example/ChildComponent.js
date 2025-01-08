import React from "react";

class ChildComponent extends React.Component {
  render() {
    return <div>child component: {this.props.name}</div>;
  }
}
export default ChildComponent;
