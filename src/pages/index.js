import React from 'react'
import Helmet from 'react-helmet'

import { TICKETS_URL } from '../../lib/constants'
import styles from './index.module.scss'
import logo from '../images/logo.svg'

const IndexPage = () => (
  <div>
    <Helmet
      htmlAttributes={{
        class: 'home',
      }}
    />

    <section styleName="container">
      <img src={logo} alt="Alejandro G. Iñárritu’s Carne y Arena" width="750" styleName="logo" />

      <p styleName="summary">
        This groundbreaking and immersive virtual reality exhibition
        is unlike anything you’ve experienced before.
      </p>

      <a href={TICKETS_URL} className="button" rel="noopener">Reserve Your Space</a>
    </section>
  </div>
)

export default IndexPage
