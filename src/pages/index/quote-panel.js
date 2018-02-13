import React from 'react'

import styles from './quote.module.scss'

const QuotePanel = () => (
  <section styleName="panel">
    <div styleName="container">
      <blockquote>
        <p>Sometimes we have to create a virtual reality to talk about reality.</p>
        <cite>Alejandro G. Iñárrito</cite>
      </blockquote>
    </div>
  </section>
)

export default QuotePanel
