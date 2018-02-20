import React from 'react'
import Link from 'gatsby-link'

import { TICKETS_URL } from '../../lib/constants'
import styles from './index.module.scss'

const IndexPage = () => (
  <section styleName="container">
    <p styleName="intro">
      <span>
        Oscar winning director Alejandro Inarritu’s next film
        is more than a film<b>.</b>
      </span>
      <span>
        Carne y Arena is a groundbreaking virtual reality installation
        that allows the viewer to go inside the story<b>.</b>
      </span>
      <span>
        This immersive experience is unlike anything you’ve
        seen before<b>.</b>
      </span>
    </p>

    <footer styleName="footer">
      <p>Produced and Financed by [TODO]</p>
      <ul styleName="logo-list">
        <li><img src="//placehold.it/140x40?text=LOGO" alt=""/></li>
        <li><img src="//placehold.it/140x40?text=LOGO" alt=""/></li>
        <li><img src="//placehold.it/140x40?text=LOGO" alt=""/></li>
      </ul>
    </footer>
  </section>
)

export default IndexPage
