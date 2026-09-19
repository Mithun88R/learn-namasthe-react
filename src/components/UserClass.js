import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
        <h2>{this.props.location}</h2>
      </div>
    );
  }
}

export default UserClass;
