import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

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
      <p styleName="intro">
        Academy Award winning director Alejandro Inarritu’s next film is more
        than a film<b>.</b>  Carne y Arena is a groundbreaking virtual reality
        installation that allows the viewer to go inside the story<b>.</b> This
        immersive experience is unlike anything you’ve seen before<b>.</b>
      </p>
    </section>
  </div>
)

export default IndexPage
