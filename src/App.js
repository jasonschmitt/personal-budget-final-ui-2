import React from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/nav/nav'
import Home from './pages/home'
import TestTwo from './pages/testtwo'
import Signup from './pages/signup'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import CreateBudget from './pages/createBudget'
import Account from './pages/account'
import Logout from './pages/logout'
import Footer from './components/footer/footer'
import Modal from './components/modal/modal'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import ProtectedRoute from './ProtectedRoute'
import M from 'materialize-css'

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: {},
  }

  componentDidMount() {
    console.log('it mounted')
    // this.localStorageLogout()
    this.checkIfUserShouldBeLoggedOut()
    this.checkLoggedInStatus()
  }

  checkIfUserShouldBeLoggedOut() {
    setInterval(() => {
      this.checkExpirationInLocalStorage()
    }, 1000)
  }

  checkExpirationInLocalStorage() {
    // console.log('checkExpirationInLocalStorage');
    const expired = localStorage.getItem('expire')
    const token = localStorage.getItem('token')
    const _id = localStorage.getItem('_id')
    const isExpired = Date.now()

    // console.log(expired)
    // console.log(isExpired)
    // console.log(expired - isExpired)
    const that = this
    if (expired != null && token != null && _id != null) {
      if (isExpired > expired) {
        console.log('this token is expired')
        setTimeout(() => {
          that.localStorageLogout()
        }, 3000)
      } else if (expired - isExpired < 20000) {
        console.log('SHOW MODAL TO STAY LOGGED IN')
        if (expired - isExpired >= 19000) {
          const options = {
            onOpenStart: () => {
              console.log('Open Start')
            },
            onOpenEnd: () => {
              console.log('Open End')
            },
            onCloseStart: () => {
              console.log('Close Start')
              var expiration = Date.now()
              var oneMinuteInMilliseconds = 60000
              // console.log(expiration + oneMinuteInMilliseconds);
              // console.log(expiration);
              expiration = expiration + oneMinuteInMilliseconds
              localStorage.setItem('expire', expiration)
            },
            onCloseEnd: () => {
              console.log('Close End')
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: '4%',
            endingTop: '10%',
          }
          var Modalelem = document.querySelector('.modal')
          var instance = M.Modal.init(Modalelem, options)
          // if(instance.isOpen())
          console.log(instance.isOpen)
          instance.open()
        }
      } else {
        console.log('this token is NOT expired')
      }
    }
  }

  localStorageLogout() {
    console.log('logging out! :)')
    localStorage.clear()
    window.location.href = '/login'
  }

  checkLoggedInStatus() {
    const isAuthenticated = localStorage.getItem('token')
    if (isAuthenticated) {
      this.setState({ isLoggedIn: true })
      const token = localStorage.getItem('token')
      const user_id = localStorage.getItem('_id')

      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `JWT ${token}`,
      }

      let baseURL =
        window.location.hostname === 'localhost'
          ? 'http://localhost:8081'
          : 'https://personal-budget-api.herokuapp.com'

      axios
        .get(`${baseURL}/user/${user_id}`, {
          headers: headers,
        })
        .then((response) => {
          // console.log(response.data)
          this.setState({ user: response.data })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  // let baseURL =
  //   window.location.hostname === "localhost"
  //     ? "http://localhost:8081"
  //     : "https://personal-budget-api.herokuapp.com";

  // axios
  //   .get(`${baseURL}/test`)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  getData = () => {
    console.log(this.state)
  }
  render() {
    return (
      <Router>
        <button onClick={this.getData}>get the state</button>
        {this.state.isLoggedIn ? (
          <div>is logged in: true</div>
        ) : (
          <div>is logged in: false</div>
        )}

        <Nav isLoggedIn={this.state.isLoggedIn} />
        <Switch>
          <Route exact path="/">
            <Home isLoggedIn={this.state.isLoggedIn} globalState={this.state} />
          </Route>
          <Route exact path="/testtwo">
            <TestTwo />
          </Route>
          <ProtectedRoute
            exact={true}
            path="/dashboard"
            redirectLink="/login"
            isLoggedIn={this.state.isLoggedIn}
            globalState={this.state}
            component={Dashboard}
          />
          <ProtectedRoute
            exact={true}
            path="/createBudget"
            redirectLink="/login"
            isLoggedIn={this.state.isLoggedIn}
            globalState={this.state}
            component={CreateBudget}
          />
          <ProtectedRoute
            exact={true}
            path="/account"
            redirectLink="/login"
            isLoggedIn={this.state.isLoggedIn}
            globalState={this.state}
            component={Account}
          />
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoute
            exact={true}
            path="/logout"
            redirectLink="/login"
            isLoggedIn={this.state.isLoggedIn}
            component={Logout}
          />
        </Switch>
        <Footer />
        <Modal />
      </Router>
    )
  }
}

export default App
