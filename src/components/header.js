import React from 'react'
import Link from 'gatsby-link'

import { TICKETS_URL } from '../../lib/constants'
import Nav from './nav'
import SubscribeFrom from './subscribe'
import styles from './header.module.scss'
import emailIcon from '../images/email.svg'
import pinIcon from '../images/pin.svg'

class Header extends React.Component {
  state = {
    open: false,
    responseStatus: false,
    responseMessage: false
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscapeKey, false);
  }

  changeView = ({status, message}) => {
    this.setState({
      responseStatus: status,
      responseMessage: message
    })
  }

  handleEscapeKey = (event) => {
    if(event.keyCode === 27) {
      this.setState({ open: false })
      this.refs.emailButton.blur()
    }
  }

  renderResetButton() {
    return (
      <button styleName="reset-button" onClick={this.resetForm}>Please try again.</button>
    )
  }

  renderSignupForm() {
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
          <SubscribeFrom onDone={this.changeView} />
        </div>
      </div>
    )
  }

  renderSignupDone() {
    return (
      <div styleName="subscribe-done">
        <p>
          {this.state.responseMessage}
          {this.state.responseStatus == 'error' ? this.renderResetButton() : null}
        </p>
      </div>
    )
  }

  resetForm = () => {
    this.setState({
      responseStatus: false,
      responseMessage: false
    })
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

        <button styleName="menu-button" aria-controls="header-menu">
          <span className="screenreader-only">Menu</span>
          <span styleName="menu-icon"></span>
        </button>

        <Nav data-context="header" />

        <div styleName="utility" data-open={this.state.open}>
          <ul styleName="tag">
            <li>
              <button ref="emailButton" onClick={this.toggle} aria-controls="subscribe-panel" aria-expanded={this.state.open} styleName="icon-link">
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
            {!this.state.responseMessage ? this.renderSignupForm() : this.renderSignupDone()}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
