import React from 'react'
import Link from 'gatsby-link'

import styles from './nav.module.scss'

class Nav extends React.Component {
  render() {
    return (
      <ul id="header-menu" styleName="nav" {...this.props}>
        <li>
          <Link to="about" styleName="link" activeClassName={styles.active}>
            <span styleName="number">01</span>
            <span styleName="line">About</span>
            <span styleName="line">the Exhibition</span>
          </Link>
        </li>

        <li>
          <Link to="info" styleName="link" activeClassName={styles.active}>
            <span styleName="number">02</span>
            <span styleName="line">Additional</span>
            <span styleName="line">Information</span>
          </Link>
        </li>
      </ul>
    )
  }
}

export default Nav
