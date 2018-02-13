import React from 'react'

import styles from './intro.module.scss'

const IntroPanel = () => (
  <section styleName="panel">
    <div styleName="headline">
      <h2>How far can you walk in 6.5 minutes?</h2>
    </div>

    <div styleName="text">
      <p>Now add sand and a 20 pound backpack. Add sun  and take away water.</p>
      <p><span styleName="highlight">¿</span>Qué sientes<span styleName="highlight">?</span> <span styleName="highlight">¿</span>Qué ves<span styleName="highlight">?</span></p>
      <p>Sometimes a short walk can take you a long way.</p>
      <p>Into another life.</p>
      <p>Another way of seeing.</p>
    </div>
  </section>
)

export default IntroPanel
