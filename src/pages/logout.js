import React from "react";

class Logout extends React.Component {
  logout() {
    localStorage.clear();
    window.location.href = "/";
  }
  render() {
    return (
      <div>
        <button onClick={this.logout}>logout</button>
      </div>
    );
  }
}

export default Logout;
