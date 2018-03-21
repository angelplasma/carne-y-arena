import React from 'react'
import Link from 'gatsby-link'

import styles from './footer.module.scss'
import lpLogo from '../images/legendary-pictures-logo.svg'
import fpLogo from '../images/fondazione-prada-logo.png'
import ecLogo from '../images/emerson-collective-logo.png'
import phLogo from '../images/phillips-logo.svg'
import atLogo from '../images/atlas-logo.png'

const Footer = () => (
  <footer styleName="footer">
    <p styleName="links">
      <Link to="/terms">Terms & Conditions</Link>
      <Link to="/privacy">Privacy Policy</Link>
    </p>

    <p styleName="producers-intro">
      Produced and Financed by Legendary Entertainment, Fondazione Prada and Emerson Collective.
    </p>

    <ul styleName="logos">
      <li><img src={lpLogo} alt="Legendary Entertainment" width="107" /></li>
      <li><img src={fpLogo} alt="Fondazione Prada" width="152" /></li>
      <li><img src={ecLogo} alt="Emerson Collective" width="138" /></li>
    </ul>

    <p styleName="partners-intro">
      Washington, D.C. Community Partners
    </p>

    <ul styleName="logos">
      <li><img src={phLogo} alt="The Phillips Collection" width="120" /></li>
      <li><img src={atLogo} alt="Atlas Performing Arts Center" width="90" /></li>
    </ul>
  </footer>
)

export default Footer
