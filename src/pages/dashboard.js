import React from 'react'

class Dashboard extends React.Component {
  render() {
    // console.log(this.props)
    const { globalState } = this.props.data
    const user = globalState.user
    return (
      <div>
        <div>dashboard page for {user.firstName}</div>
        <div>display charts and data here</div>
        <div>create budget</div>
        <div>configure budget</div>
      </div>
    )
  }
}

export default Dashboard
