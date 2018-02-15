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
        if (err || data.result !== 'success') {
          this.setState({
            status: 'error',
            message: 'There was a problem signing up.'
          })
        } else {
          this.setState({
            status: 'success',
            message: 'You are subscribed, thank you!'
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
      <div>
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
      </div>
    )
          // {status === 'sending' && <p styleName="status"dangerouslySetInnerHTML={{ __html: message }} />}
          // {status === 'error' && <p styleName="status"dangerouslySetInnerHTML={{ __html: message }} />}
  }
}

export default SubscribeForm
