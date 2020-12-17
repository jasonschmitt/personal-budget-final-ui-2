import React from 'react'
import Chart from 'chart.js'
import axios from 'axios'

class ChartOne extends React.Component {
  componentDidMount() {
    console.log('chart one mounted')
    // get data with axios request
    console.log('making axios request')
    let baseURL =
      window.location.hostname === 'localhost'
        ? 'http://localhost:8081'
        : 'https://personal-budget-api.herokuapp.com'

    const that = this
    axios
      .get(`${baseURL}/budget`)
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
    // console.log(apiResponse)
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

  render() {
    return (
      <section className="chartOne">
        <canvas id="myChart" width="200" height="200"></canvas>
      </section>
    )
  }
}

export default ChartOne
