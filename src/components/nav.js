import React from 'react'
import Link from 'gatsby-link'

import styles from './nav.module.scss'

const Nav = (props) => (
  <ul styleName="nav" {...props}>
    <li>
      <Link to="about" styleName ="link">
        <span styleName="number">01</span>
        <span>About</span>
        <span>the Exhibition</span>
      </Link>
    </li>

    <li>
      <Link to="bring" styleName ="link">
        <span styleName="number">02</span>
        <span>What to</span>
        <span>Bring With You</span>
      </Link>
    </li>

    <li>
      <Link to="leave" styleName ="link">
        <span styleName="number">03</span>
        <span>What to</span>
        <span>Leave Behind</span>
      </Link>
    </li>
  </ul>
)

export default Nav
