// Write your React code here.
import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {change: true}

  syam = () => {
    const {change} = this.state
    this.setState({change: !change})
  }

  render() {
    const {change} = this.state
    const {resources} = this.props
    // const {emojis} = resources
    console.log(change)

    return (
      <div className="main-bg">
        {change ? (
          <div className="inner-bg">
            <h1>How satisfied are you with our customer support performance</h1>
            <ul>
              {/* {emojis.map(each => (
              <li key={each.id}>
                <div className="emoji-bg">
                  <img onClick={this.syam} src={each.imageUrl} alt="img" />
                  <p>{each.name}</p>
                </div>
              </li>
            ))} */}
              <li key={resources.emojis[0].id}>
                <div className="emoji-bg">
                  <img src={resources.emojis[0].imageUrl} alt="Sad" />
                  <p>{resources.emojis[0].name}</p>
                </div>
              </li>
              <li key={resources.emojis[1].id}>
                <div className="emoji-bg">
                  <img src={resources.emojis[1].imageUrl} alt="None" />
                  <p>{resources.emojis[1].name}</p>
                </div>
              </li>
              <li key={resources.emojis[2].id}>
                <div className="emoji-bg">
                  <img
                    onClick={this.syam}
                    src={resources.emojis[2].imageUrl}
                    alt="Happy"
                  />
                  <p>{resources.emojis[2].name}</p>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="love-bg">
            <img
              className="love"
              src={resources.loveEmojiUrl}
              alt="love emoji"
            />
            <h1>Thank You</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
