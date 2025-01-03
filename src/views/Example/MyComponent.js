import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "DatPMiScape",
    channel: "HAB",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    let nameP = "DatPMiScape";

    return (
      <>
        <div className="first">hello my component {nameP}</div>
        <div className="second">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          hello my component {this.state["name"]}
        </div>
        <div className="third">hello my component {this.state.channel}</div>
      </>
    );
  }
}

export default MyComponent;
