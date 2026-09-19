import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
        <h2>{this.props.location}</h2>
      </div>
    );
  }
}

export default UserClass;
