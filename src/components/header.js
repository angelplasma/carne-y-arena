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

  renderEmailForm() {
    return (
      <div styleName="subscribe-inner">
        <div styleName="subscribe-intro">
          <p>
            <span>Subscribe to receive notifications about CARNE y ARENA</span>, including
            when new blocks of tickets are released. Don’t worry, we do not
            share email or membership information with third parties
          </p>
        </div>

        <div>
          <form action="https://emersoncollective.us11.list-manage.com/subscribe/post?u=3b12b4afc137627b9399e835c&amp;id=d9d9126a56" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" styleName="subscribe-form" target="_blank" noValidate>
            <label htmlFor="mce-EMAIL" style={{display:'none'}}>Email Address</label>
            <input type="email" name="EMAIL" styleName="subscribe-input" id="mce-EMAIL" placeholder="Your Email Address" />
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_3b12b4afc137627b9399e835c_d9d9126a56" tabIndex="-1" defaultValue="" /></div>
            <button styleName="subscribe-button" className="button">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }

  renderEmailSuccess() {
    return (
      <div styleName="subscribe-success">
        <p>You are subscribed, thank you!</p>
      </div>
    )
  }

  toggle = () => {
    this.setState({ open: !this.state.open })
    event.preventDefault()
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
              <button onClick={this.toggle} aria-controls="subscribe-panel" aria-expanded={this.state.open} styleName="icon-link">
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

          <div id="subscribe-panel" styleName="subscribe-outer" aria-hidden={!this.state.open}>
            {!this.state.subscribed ? this.renderEmailForm() : this.renderEmailSuccess()}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
