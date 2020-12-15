import React from 'react'
import ColorPicker from 'material-ui-color-picker'

class CreateBudget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCreatingBudget: false,
      color: '',
      color2: '',
      labels: [],
    }

    // this.delta = this.delta.bind(this);
  }

  componentDidMount() {
    console.log('create budget mounted')
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

  setLabel = (label) => {
    console.log('set label')
  }

  submit = () => {
    console.log('submit to database')
    console.log(this.state)
  }

  render() {
    let isCreatingBudget = this.state.isCreatingBudget
    return (
      <section className="create-budget">
        {isCreatingBudget ? (
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s2">
                  <i className="material-icons prefix">subject</i>
                  <input id="icon_prefix" type="text" className="validate" />
                  <label htmlFor="icon_prefix">Label Name</label>
                </div>

                <div className="input-field col s2">
                  <i className="material-icons prefix">colorize</i>
                  <ColorPicker
                    name="color"
                    defaultValue="Color"
                    value={this.state.color}
                    onChange={(color) => this.setColor('color', color)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s2">
                  <i className="material-icons prefix">subject</i>
                  <input id="icon_prefix2" type="text" className="validate" />
                  <label htmlFor="icon_prefix2">Label Name</label>
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
              </div>
              <a className="btn" onClick={this.submit}>
                Create budget
              </a>
            </form>
          </div>
        ) : (
          <div>
            <div>create budget area</div>
            <a className="btn" onClick={this.createBudget}>
              create budget
            </a>
          </div>
        )}
      </section>
    )
  }
}

export default CreateBudget
