import React from "react";

class Home extends React.Component {
  render() {
    const { globalState } = this.props;
    const isLoggedIn = this.props.isLoggedIn;
    console.log(globalState.user);
    const user = globalState.user;
    return (
      <div>
        {isLoggedIn ? (
          <div>user is logged in as {user.firstName}</div>
        ) : (
          <div>user is NOT logged in</div>
        )}
      </div>
    );
  }
}

export default Home;
