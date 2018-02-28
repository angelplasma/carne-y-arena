import React from 'react'
import Link from 'gatsby-link'

import Nav from './nav'
import SubscribeFrom from './subscribe'
import styles from './header.module.scss'
import closeIcon from '../images/close.svg'
import emailIcon from '../images/email.svg'
import menuIcon from '../images/menu.svg'
import pinIcon from '../images/pin.svg'

class Header extends React.Component {
  state = {
    mobileNavOpen: false,
    utilityOpen: false,
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
    if( event.keyCode === 27) {
      this.setState({
        mobileNavOpen: false,
        utilityOpen: false
      })
      this.refs.emailButton.blur()
      this.refs.mobileNavButton.blur()
    }
  }

  renderCloseButton() {
    return (
      <button onClick={this.toggleUtility} aria-controls="subscribe-panel" aria-expanded={this.state.utilityOpen} styleName="close-button">
        <img src={closeIcon} alt="" title="Close" />
      </button>
    )
  }

  renderResetButton() {
    return (
      <span>
        <button styleName="reset-button" onClick={this.resetForm}>Please try again</button>.
      </span>
    )
  }

  renderSignupForm() {
    return (
      <div styleName="subscribe-inner">
        <div styleName="subscribe-intro">
          <p>
            <span>Subscribe to receive notifications about CARNE y ARENA</span>,
            including when new blocks of tickets are released. Don’t worry, we
            do not share email or membership information with third parties.
          </p>
        </div>

        <div styleName="subscribe-form">
          <SubscribeFrom onDone={this.changeView} />
          {this.renderCloseButton()}
        </div>
      </div>
    )
  }

  renderSignupDone() {
    return (
      <div styleName="subscribe-done">
        <p>
          {this.state.responseMessage}
          {this.state.responseStatus == 'error' ? this.renderResetButton() : this.renderCloseButton()}
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

  toggleMobileNav = () => {
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen })
  }

  toggleUtility = () => {
    this.resetForm()
    this.setState({ utilityOpen: !this.state.utilityOpen })
  }

  render() {
    return (
      <header styleName="header">
        <button ref="mobileNavButton" onClick={this.toggleMobileNav} styleName="menu-button">
          <img src={menuIcon} alt="" title="Menu" />
        </button>

        <Nav onClick={this.toggleMobileNav} data-open={this.state.mobileNavOpen} />

        <div styleName="utility" data-open={this.state.utilityOpen}>
          <ul styleName="tag">
            <li>
              <button ref="emailButton" onClick={this.toggleUtility} aria-controls="subscribe-panel" aria-expanded={this.state.utilityOpen} styleName="icon-link">
                <img src={emailIcon} alt="" title="Email Newsletter Signup" />
              </button>
            </li>

            <li>
              <Link to="/location" styleName="icon-link">
                <img src={pinIcon} alt="" title="View Location" />
              </Link>
            </li>
          </ul>

          <div id="subscribe-panel" styleName="subscribe-outer" aria-hidden={!this.state.utilityOpen}>
            {!this.state.responseMessage ? this.renderSignupForm() : this.renderSignupDone()}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
