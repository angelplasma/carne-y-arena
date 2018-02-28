// Subscribe component based off of Mailchimp subscribe component found here:
// https://github.com/revolunet/react-mailchimp-subscribe/blob/master/src/index.js

import React from 'react'
import jsonp from 'jsonp'

import { SUBSCRIBE_URL } from '../../lib/constants'
import styles from './subscribe.module.scss'

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class SubscribeForm extends React.Component {
  state = {
    status: null,
    message: null
  }

  handleChange = event => {
    this.setState({
      status: event.target.value && event.target.value.indexOf('@') > 0 && event.target.value.indexOf('.') > 2
    })
  }

  track() {
    const dataLayer = window.dataLayer = window.dataLayer || []
    dataLayer.push({'event': 'email signup'})
  }

  handleSubmit = event => {
    event.preventDefault()

    const url = getAjaxUrl(SUBSCRIBE_URL) + `&EMAIL=${encodeURIComponent(this.input.value)}`;

    this.setState(
      {
        status: 'sending',
        message: 'Sending...'
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (data.result === 'success') {
          this.setState({
            status: 'success',
            message: 'You are subscribed, thank you!'
          })
          this.track()
        } else {
          var alreadySubscribed = data.msg.indexOf('already subscribed') > -1
          this.setState({
            status: alreadySubscribed ? 'duplicate' : 'error',
            message: alreadySubscribed ? 'You are already signed up with this email address. Thanks!' : 'There was a problem signing up.'
          })
        }

        // custom success handler sent from parent component
        this.props.onDone(this.state)
      })
    )
  }

  render() {
    const { onDone } = this.props
    const { status, message } = this.state

    return (
      <form
        action={SUBSCRIBE_URL}
        method="post"
        styleName="form"
        noValidate>
        <input
          ref={node => (this.input = node)}
          type="email"
          defaultValue=""
          name="EMAIL"
          required={true}
          placeholder="Your Email Address"
          styleName="input"
          onChange={this.handleChange} />

        <button
          disabled={!this.state.status || this.state.status === "sending"}
          onClick={this.handleSubmit}
          type="submit"
          styleName="button"
          className="button">
          Sign Up
        </button>

      </form>
    )
  }
}

export default SubscribeForm
