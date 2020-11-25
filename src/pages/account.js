import axios from 'axios'
import React from 'react'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = { firstName: '', password: '', email: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    $(document).ready(function () {
      setTimeout(function () {
        M.updateTextFields()
        $('input#input_text, textarea#textarea2').characterCounter()
      }, 1000)
    })
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({ firstName: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    alert('A name was submitted: ' + this.state.firstName)
    const dataObj = {
      firstName: this.state.firstName,
    }
    const token = localStorage.getItem('token')
    const user_id = localStorage.getItem('_id')
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `JWT ${token}`,
    }
    console.log(user_id)
    console.log(token)
    console.log(dataObj)

    axios
      .put(`http://localhost:8081/user/${user_id}`, dataObj, {
        headers: headers,
      })
      .then((response) => {
        console.log(response)
        location.reload()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Account
