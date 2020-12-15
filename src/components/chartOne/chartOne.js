import React from 'react'
import Chart from 'chart.js'

class ChartOne extends React.Component {
  componentDidMount() {
    console.log('chart one mounted')
    this.renderChart()
  }

  renderChart() {
    var ctx = document.getElementById('myChart').getContext('2d')
    var data = {
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: ['red', 'rgb(15,117,67)', 'rgb(24,47,234)'],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['Red', 'Yellow', 'rgb(24,47,234)'],
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
