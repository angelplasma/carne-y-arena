import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames/bind'

import styles from './nav.module.scss'

const cx = classNames.bind(styles);

class Nav extends React.Component {
  render() {
    const {pathname, ...htmlAttrs} = this.props
    const navClassName = cx({
      nav: true,
      inverse: pathname === '/',
    });

    return (
      <ul id="header-menu" className={navClassName} {...htmlAttrs}>
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
