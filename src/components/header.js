import React from 'react'
import Link from 'gatsby-link'

import { TICKETS_URL } from '../../lib/constants'
import Nav from './nav'
import styles from './header.module.scss'
import emailIcon from '../images/email.svg'
import pinIcon from '../images/pin.svg'

class Header extends React.Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <header styleName="header">
        <Link to="/" styleName="title">
          <span>Carne</span> y <span>Arena</span>
        </Link>

        <Nav data-context="header" />

        <div styleName="utility" data-open={this.state.open}>
          <ul styleName="tag">
            <li>
              <button onClick={this.toggle} aria-controls="utility-menu" aria-expanded={this.state.open} styleName="icon-link">
                <img src={emailIcon} alt="" title="Email Newsletter Signup" />
              </button>
            </li>

            <li>
              <Link to="/location" styleName="icon-link">
                <img src={pinIcon} alt="" title="View Location" />
              </Link>
            </li>

            <li>
              <Link to={TICKETS_URL} styleName="text-link">Get Tickets</Link>
            </li>
          </ul>

          <div id="utility-menu" styleName="subscribe-panel" aria-hidden={!this.state.open}>
            <div>
              <p>[TODO: EMAIL SUBSCRIBE FORM]</p>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
