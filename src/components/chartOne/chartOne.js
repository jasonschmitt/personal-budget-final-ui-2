import React from 'react'
import Chart from 'chart.js'
import axios from 'axios'

class ChartOne extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasBudgets: false,
    }
  }
  componentDidMount() {
    console.log('chart one mounted')
    // get data with axios request
    console.log('making axios request')
    let baseURL =
      window.location.hostname === 'localhost'
        ? 'http://localhost:8081'
        : 'https://personal-budget-api.herokuapp.com'

    const _id = localStorage.getItem('_id')
    console.log(_id)
    const that = this
    axios
      .get(`${baseURL}/budget/${_id}`)
      .then(function (response) {
        // console.log(response.data)
        // pass data to renderChart function
        that.renderChart(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  renderChart(apiResponse) {
    console.log(apiResponse)
    if (apiResponse[0].values) {
      this.setState({ hasBudgets: true })
      var ctx = document.getElementById('myChart').getContext('2d')
      var data = {
        datasets: [
          {
            data: apiResponse[0].values,
            backgroundColor: apiResponse[0].backgroundColor,
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: apiResponse[0].labels,
      }
      var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          maintainAspectRatio: false,
        },
      })
    }
  }

  render() {
    const hasBudgets = this.state.hasBudgets
    const pr20 = {
      paddingRight: '20px',
    }
    return (
      <section>
        {hasBudgets ? (
          <section className="chartOne">
            <canvas id="myChart" width="200" height="200"></canvas>
          </section>
        ) : (
          <section>
            <div className="row">
              <div className="col s12 center-align">
                <span style={pr20}>
                  Your charts will display here when you create a chart!
                </span>

                <a
                  href="/createBudget"
                  className="btn-floating btn-large yellow accent-4 black-text pulse"
                >
                  <i className="material-icons">edit</i>
                </a>
              </div>
            </div>
          </section>
        )}
      </section>
    )
  }
}

export default ChartOne
