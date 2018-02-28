import React from 'react'
import Link from 'gatsby-link'

import Nav from './nav'
import styles from './header.module.scss'
import menuIcon from '../images/menu.svg'

class Header extends React.Component {
  state = {
    mobileNavOpen: false,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscapeKey, false)
  }

  handleEscapeKey = (event) => {
    if( event.keyCode === 27) {
      this.setState({
        mobileNavOpen: false,
      })
      this.refs.mobileNavButton.blur()
    }
  }

  toggleMobileNav = () => {
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen })
  }

  render() {
    return (
      <header styleName="header">
        <button ref="mobileNavButton" onClick={this.toggleMobileNav} styleName="menu-button">
          <img src={menuIcon} alt="" title="Menu" />
        </button>

        <Nav onClick={this.toggleMobileNav} data-open={this.state.mobileNavOpen} />
      </header>
    )
  }
}

export default Header
