import React from 'react'
import axios from 'axios'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { firstName: '', password: '', email: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    // console.log(target);
    // console.log(target.name);
    const name = target.name
    this.setState({ [name]: event.target.value })
    // console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault()
    let baseURL =
      window.location.hostname === 'localhost'
        ? 'http://localhost:8081'
        : 'https://personal-budget-api.herokuapp.com'

    const dataObj = {
      firstName: this.state.firstName,
      email: this.state.email,
      password: this.state.password,
    }
    axios
      .post(`${baseURL}/auth/register`, dataObj)
      .then(function (response) {
        console.log(response)
        localStorage.setItem('token', response.data.token)
        console.log(typeof response.data._id)
        localStorage.setItem('_id', response.data._id)
        console.log('setExpirationInLocalStorage')
        var expiration = Date.now()
        var oneMinuteInMilliseconds = 60000
        // console.log(expiration + oneMinuteInMilliseconds);
        // console.log(expiration);
        expiration = expiration + oneMinuteInMilliseconds
        localStorage.setItem('expire', expiration)
        window.location.href = '/dashboard'
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <button
          className="btn yellow accent-4 black-text waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    )
  }
}

export default Signup
