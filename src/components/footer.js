import React from 'react'
import Link from 'gatsby-link'

import styles from './footer.module.scss'
import lpLogo from '../images/legendary-pictures-logo.svg'
import fpLogo from '../images/fondazione-prada-logo.png'
import ecLogo from '../images/emerson-collective-logo.png'

const Footer = () => (
  <footer styleName="footer">
    <p styleName="producers">
      Produced and Financed by Legendary Entertainment, Fondazione Prada and Emerson Collective.
    </p>

    <p styleName="links">
      <Link to="/terms">Terms & Conditions</Link>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/press">Press</Link>
      <Link to="/contact">Contact</Link>
    </p>

    <ul styleName="logos">
      <li><img src={lpLogo} alt="Legendary Entertainment" width="107" /></li>
      <li><img src={fpLogo} alt="Fondazione Prada" width="152" /></li>
      <li><img src={ecLogo} alt="Emerson Collective" width="138" /></li>
    </ul>
  </footer>
)

export default Footer
