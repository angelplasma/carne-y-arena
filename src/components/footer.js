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
    <div>
      <h2>
        Produced and Financed by Legendary Entertainment, Fondazione Prada and Emerson Collective.
      </h2>

      <ul styleName="logos">
        <li><img src={lpLogo} alt="Legendary Entertainment" width="101" /></li>
        <li><img src={fpLogo} alt="Fondazione Prada" width="149" /></li>
        <li><img src={ecLogo} alt="Emerson Collective" width="129" /></li>
      </ul>
    </div>

    <div styleName="partners">
      <h2>
        Washington, D.C. Community Partners
      </h2>

      <ul styleName="logos">
        <li><img src={phLogo} alt="The Phillips Collection" width="113" /></li>
        <li><img src={atLogo} alt="Atlas Performing Arts Center" width="98" /></li>
      </ul>
    </div>

    <p styleName="links">
      <Link to="/terms">Terms & Conditions</Link>
      <Link to="/privacy">Privacy Policy</Link>
    </p>
  </footer>
)

export default Footer
