import React from 'react'
import Helmet from 'react-helmet'

import { TICKETS_URL } from '../../lib/constants'
import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <Helmet
      htmlAttributes={{
        class: 'home',
      }}
    />

    <section styleName="container">
      <h1 styleName="title">
        <span styleName="line1">
          Alejandro G. Iñárritu
          <span className="screenreader-only">’s</span>
        </span>
        <span styleName="line2">Carne <b>y</b> Arena</span>
      </h1>

      <p styleName="tagline">(Virtually present, Physically invisible)</p>

      <p styleName="summary">
        This groundbreaking and immersive virtual reality exhibit
        is unlike anything you’ve experienced before.
      </p>

      <a href={TICKETS_URL} className="button" rel="noopener">Reserve Your Space</a>
    </section>
  </div>
)

export default IndexPage
