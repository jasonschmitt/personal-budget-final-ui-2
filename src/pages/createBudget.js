import React from 'react'
import CreateBudget from '../components/createBudget/createBudget'

class createBudget extends React.Component {
  render() {
    // console.log(this.props)
    const { globalState } = this.props.data
    const user = globalState.user
    return (
      <div>
        <div>create budget page for {user.firstName}</div>
        <CreateBudget />
      </div>
    )
  }
}

export default createBudget
