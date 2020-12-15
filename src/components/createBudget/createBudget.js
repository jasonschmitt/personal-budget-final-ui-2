import React from 'react'

class CreateBudget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCreatingBudget: false,
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
  // createBudget() {
  //   console.log('create budget')
  //   console.log(this.state)
  //   // this.setState({ quantity: 2 })
  // }

  render() {
    let isCreatingBudget = this.state.isCreatingBudget
    return (
      <section className="create-budget">
        {isCreatingBudget ? (
          <div>creating budget form</div>
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
