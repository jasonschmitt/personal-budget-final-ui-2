import React from 'react'

class Dashboard extends React.Component {
  render() {
    // console.log(this.props)
    const { globalState } = this.props.data
    const user = globalState.user
    return <div>dashboard page for {user.firstName}</div>
  }
}

export default Dashboard
