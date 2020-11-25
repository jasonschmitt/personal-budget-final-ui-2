import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = localStorage.getItem("token");

    return isAuthenticated ? (
      <Component data={this.props} />
    ) : (
      <Redirect to={{ pathname: this.props.redirectLink }} />
    );
  }
}

export default ProtectedRoute;
