import React from 'react'
import Link from 'gatsby-link'

import styles from './footer.module.scss'
import lpLogo from '../images/legendary-pictures-logo.svg'
import fpLogo from '../images/fondazione-prada-logo.png'
import ecLogo from '../images/emerson-collective-logo.png'

const Footer = () => (
  <footer styleName="footer">
    <p>
      Produced and Financed by Legendary Entertainment and Emerson Collective.

      <Link to="/terms" styleName="text-link">
        Terms & Conditions
      </Link>

      <Link to="/privacy" styleName="text-link">
        Privacy Policy
      </Link>

      <Link to="/press" styleName="text-link">
        Press
      </Link>
    </p>

    <p styleName="phone">(888) 888-8888</p>

    <ul styleName="logos">
      <li><img src={lpLogo} alt="Legendary Entertainment" width="107" /></li>
      <li><img src={fpLogo} alt="Fondazione Prada" width="152" /></li>
      <li><img src={ecLogo} alt="Emerson Collective" width="138" /></li>
    </ul>
  </footer>
)

export default Footer
