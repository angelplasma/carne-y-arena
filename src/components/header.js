import React from 'react'
import Link from 'gatsby-link'

import Nav from './nav'
import styles from './header.module.scss'

const Header = ({nav}) => (
  <header className={styles.header}>
    <Link to="/" className={styles.title}>
      <span>Carne</span> y <span>Arena</span>
    </Link>

    <Nav data-context="header" />
  </header>
)

export default Header
