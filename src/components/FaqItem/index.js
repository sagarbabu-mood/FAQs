import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isAnswerVisible: false}

  onChangeState = () => {
    this.setState(prevState => ({
      isAnswerVisible: !prevState.isAnswerVisible,
    }))
  }

  render() {
    const {eachFaq} = this.props
    const {isAnswerVisible} = this.state
    const buttonImage = isAnswerVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imgAlt = isAnswerVisible ? 'minus' : 'plus'

    return (
      <div className="faq-item">
        <li className="question-container">
          <h1 className="question">{eachFaq.questionText}</h1>
          <button type="button" onClick={this.onChangeState}>
            <img src={buttonImage} alt={imgAlt} />
          </button>
        </li>

        {isAnswerVisible && (
          <div>
            <hr />
            <p>{eachFaq.answerText}</p>
          </div>
        )}
      </div>
    )
  }
}

export default FaqItem
