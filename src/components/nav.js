import React from 'react'
import Link from 'gatsby-link'

import { TICKETS_URL } from '../../lib/constants'
import styles from './nav.module.scss'

class Nav extends React.Component {
  render() {
    return (
      <ul id="header-menu" styleName="nav" {...this.props}>
        <li>
          <Link to="/" styleName="link" activeClassName={styles.active} exact>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" styleName="link" activeClassName={styles.active}>
            About the Exhibition
          </Link>
        </li>

        <li>
          <Link to="/info" styleName="link" activeClassName={styles.active}>
            Additional Information
          </Link>
        </li>

        <li>
          <a href={TICKETS_URL} styleName="link" rel="noopener">
            Reserve Your Space
          </a>
        </li>

        <li>
          <Link to="/location" styleName="link" activeClassName={styles.active}>
            Location
          </Link>
        </li>
      </ul>
    )
  }
}

export default Nav
