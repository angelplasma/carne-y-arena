import React from 'react'
import Link from 'gatsby-link'

import { TICKETS_URL } from '../../lib/constants'
import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <section styleName="container">
      <p styleName="intro">
        Academy Award winning director Alejandro Inarritu’s next film is more
        than a film<b>.</b>  Carne y Arena is a groundbreaking virtual reality
        installation that allows the viewer to go inside the story<b>.</b> This
        immersive experience is unlike anything you’ve seen before<b>.</b>
      </p>
    </section>

    <footer styleName="footer">
      <p>Produced and Financed by Legendary Entertainment, Fondazione Prada, and Emerson Collective.</p>
      <ul styleName="logo-list">
        <li><img src="//placehold.it/140x40?text=LOGO" alt=""/></li>
        <li><img src="//placehold.it/140x40?text=LOGO" alt=""/></li>
        <li><img src="//placehold.it/140x40?text=LOGO" alt=""/></li>
      </ul>
    </footer>
  </div>
)

export default IndexPage
