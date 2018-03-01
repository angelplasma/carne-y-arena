import React from 'react'

import styles from './footer.module.scss'
import lpLogo from '../images/legendary-pictures-logo.svg'
import ecLogo from '../images/emerson-collective-logo.png'

const Footer = () => (
  <footer styleName="footer">
    <p>Produced and Financed by Legendary Entertainment and Emerson Collective.</p>
    {/*<p styleName="phone">(888) 888-8888</p>*/}
    <ul styleName="logos">
      <li><img src={lpLogo} alt="Legendary Entertainment" width="107" /></li>
      <li><img src={ecLogo} alt="Emerson Collective" width="138" /></li>
    </ul>
  </footer>
)

export default Footer
