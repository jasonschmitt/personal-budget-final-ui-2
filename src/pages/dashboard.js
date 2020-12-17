import React from 'react'
import ChartOne from '../components/chartOne/chartOne'
import ChartTwo from '../components/chartTwo/chartTwo'
import CreateBudget from '../components/createBudget/createBudget'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    // console.log(this.props)
    const { globalState } = this.props.data
    const user = globalState.user
    return (
      <div>
        <div>dashboard page for {user.firstName}</div>
        <Link to="/createBudget">Create a new budget</Link>
        <ChartOne />
      </div>
    )
  }
}

export default Dashboard
