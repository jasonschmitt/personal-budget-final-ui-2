import React from "react";
// import logo from '../../images/jasonschmitt.jpeg'
import { Link } from "react-router-dom";

class Nav extends React.Component {
  componentDidMount() {
    const $ = window.jQuery;
    $(document).ready(function () {
      $(".sidenav").sidenav();
    });
  }

  render() {
    // console.log(this.props)
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <nav>
              <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                  Logo
                </a>
                <a
                  href="/"
                  data-target="mobile-demo"
                  className="sidenav-trigger"
                >
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/account">Account</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
              <li>
                <div className="user-view">
                  <div className="background">
                    {/* <img src="images/office.jpg"> */}
                  </div>
                  <a href="#user">
                    {/* <img className="circle" src={logo} /> */}
                  </a>
                  <a href="#name">
                    <span className="white-text name">John Doe</span>
                  </a>
                  <a href="#email">
                    <span className="white-text email">
                      jdandturk@gmail.com
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <a href="/">
                  <i className="material-icons">cloud</i>First Link With Icon
                </a>
              </li>
              <li>
                <a href="/">Second Link</a>
              </li>
              <li>
                <div className="divider"></div>
              </li>
              <li>
                <a href="/" className="subheader">
                  Subheader
                </a>
              </li>
              <li>
                <a className="waves-effect" href="/">
                  Third Link With Waves
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <nav>
              <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                  Logo
                </a>
                <a
                  href="/"
                  data-target="mobile-demo"
                  className="sidenav-trigger"
                >
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
              <li>
                <div className="user-view">
                  <div className="background">
                    {/* <img src="images/office.jpg"> */}
                  </div>
                  <a href="#user">
                    {/* <img className="circle" src={logo} /> */}
                  </a>
                  <a href="#name">
                    <span className="white-text name">John Doe</span>
                  </a>
                  <a href="#email">
                    <span className="white-text email">
                      jdandturk@gmail.com
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <a href="/">
                  <i className="material-icons">cloud</i>First Link With Icon
                </a>
              </li>
              <li>
                <a href="/">Second Link</a>
              </li>
              <li>
                <div className="divider"></div>
              </li>
              <li>
                <a href="/" className="subheader">
                  Subheader
                </a>
              </li>
              <li>
                <a className="waves-effect" href="/">
                  Third Link With Waves
                </a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Nav;
