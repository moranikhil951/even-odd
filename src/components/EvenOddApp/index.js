// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  Increment = () => {
    const {count} = this.state
    this.setState(prevState => ({
      count: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="big-Container">
        <div className="container">
          <h1 className="countHeading">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="para">Count is Even</p>
          ) : (
            <p>Count is Odd</p>
          )}
          <button className="button" type="button" onClick={this.Increment}>
            Increment
          </button>
          <p className="description-heading">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
