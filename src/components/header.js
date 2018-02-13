import React from 'react'
import Link from 'gatsby-link'

import styles from "./header.module.scss"

const renderNavItem = ({node}, index) => {
  return (
    <li>
      <Link to={node.slug} className={styles.link}>
        <span>0{index}</span>
        <span>{node.line1}</span>
        <span>{node.line2}</span>
      </Link>
    </li>
  )
}

const Header = ({nav}) => (
  <header className={styles.header}>
    <Link to="/" className={styles.title}>
      <span>Carne</span> y <span>Arena</span>
    </Link>

    <ul className={styles.nav}>
      {nav.map(renderNavItem)}
    </ul>
  </header>
)

export default Header
