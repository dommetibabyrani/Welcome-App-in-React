// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onChangeBtn = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="desc">Thank you! Happy Learning</p>

        {isSubscribed ? (
          <button type="button" onClick={this.onChangeBtn}>
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.onChangeBtn}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
