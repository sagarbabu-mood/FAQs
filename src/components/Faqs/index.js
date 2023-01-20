import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  console.log(faqsList)
  return (
    <div className="bg-container">
      <h1>FAQs</h1>
      {faqsList.map(eachFaq => (
        <FaqItem key={eachFaq.id} eachFaq={eachFaq} />
      ))}
    </div>
  )
}

export default Faqs
