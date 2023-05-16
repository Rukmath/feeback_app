import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="sub-container">
        <h1 className="title">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="emoji-box">
              <button
                onClick={this.onClickEmoji}
                type="button"
                className="button-emoji"
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
              </button>
              <p className="emoji-name">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen() {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thankyou-title">Thank You!</h1>
        <p className="desc">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="feedback-background-container">
        {isFeedbackSelected
          ? this.renderThankyouScreen()
          : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
