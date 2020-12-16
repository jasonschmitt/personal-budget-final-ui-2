import React from 'react'
import ColorPicker from 'material-ui-color-picker'
import Chart from 'chart.js'

class CreateBudget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCreatingBudget: false,
      labels: [],
      backgroundColor: [],
      values: [],
    }

    // this.delta = this.delta.bind(this);
  }

  componentDidMount() {
    console.log('create budget mounted')
    let that = this
    window.onload = function () {
      console.log('we here')
      that.renderChart()
    }
  }

  createBudget = () => {
    // do something
    console.log('create budget')
    console.log(this.state)
    this.setState({ isCreatingBudget: true })
  }

  setColor = (colorNumber, color) => {
    console.log(`set ${colorNumber} color to ${color}`)
    // const dataObj = { [colorNumber]: color }
    // console.log(dataObj)
    this.setState({ [colorNumber]: color })

    console.log(this.state)
  }

  setLabel = (e) => {
    console.log('set label')
    // console.log(e.target.value)
    // console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value })
  }

  setValue = (e) => {
    console.log('set value')
    // console.log(e.target.value)
    // console.log(e.target.name)
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) })
  }

  submit = () => {
    console.log('submit to database')
    const labelsToLoop = []
    console.log(this.state)
  }

  addLabel = () => {
    console.log('add label')
    //take from state, label/color/value and push values to the state array
    // var joined = this.state.labels.concat('new value')
    // Create a new array based on current state:
    let labels = [...this.state.labels]
    let backgroundColor = [...this.state.backgroundColor]
    let values = [...this.state.values]

    // Add item to it
    labels.push(this.state.label)
    backgroundColor.push(this.state.color)
    values.push(this.state.value)

    // Set state
    this.setState({ labels })
    this.setState({ backgroundColor })
    this.setState({ values })

    setTimeout(() => {
      console.log(this.state)
      this.renderChart()
    }, 2000)
  }

  renderChart() {
    console.log('rendering chart....')
    var ctx = document.getElementById('myChart').getContext('2d')
    var data = {
      datasets: [
        {
          data: this.state.values,
          backgroundColor: this.state.backgroundColor,
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: this.state.labels,
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
    let isCreatingBudget = this.state.isCreatingBudget
    return (
      <section className="create-budget">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s2">
                <i className="material-icons prefix">subject</i>
                <input
                  id="label"
                  type="text"
                  className="validate"
                  name="label"
                  onChange={this.setLabel}
                />
                <label htmlFor="label">Label Name</label>
              </div>

              <div className="input-field col s2">
                <i className="material-icons prefix">attach_money</i>
                <input
                  id="value"
                  type="text"
                  className="validate"
                  name="value"
                  onChange={this.setValue}
                />
                <label htmlFor="value">Value</label>
              </div>

              <div className="input-field col s2">
                <i className="material-icons prefix">colorize</i>
                <ColorPicker
                  id="color"
                  name="color"
                  defaultValue="Color"
                  value={this.state.color}
                  onChange={(color) => this.setColor('color', color)}
                />
              </div>
              <a className="btn-floating btn-large red" onClick={this.addLabel}>
                <i className="material-icons">add</i>
              </a>
            </div>

            {/* <div className="row">
                <div className="input-field col s2">
                  <i className="material-icons prefix">subject</i>
                  <input
                    id="icon_prefix3"
                    type="text"
                    className="validate"
                    name="label2"
                    onChange={this.setLabel}
                  />
                  <label htmlFor="icon_prefix3">Label Name</label>
                </div>

                <div className="input-field col s2">
                  <i className="material-icons prefix">colorize</i>
                  <ColorPicker
                    name="color"
                    defaultValue="Color"
                    value={this.state.color2}
                    onChange={(color) => this.setColor('color2', color)}
                  />
                </div>
              </div> */}
            <section className="chartOne">
              <canvas id="myChart" width="200" height="200"></canvas>
            </section>
            <a className="btn red" onClick={this.submit}>
              CREATE THIS BUDGET!
            </a>
          </form>
        </div>
      </section>
    )
  }
}

export default CreateBudget
