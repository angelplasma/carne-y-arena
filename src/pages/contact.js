import React from 'react'

import styles from './contact.module.scss'

const ContactPage = () => (
  <div className="container">
    <h1 className="screenreader-only">Contact</h1>

    <div styleName="contacts">
      <p>
        Email:<br/>
        <a href="mailto:info@carneyarenadc.com">info@carneyarenadc.com</a>
      </p>

      <p>
        For press inquiries, please contact:<br />
        Kristin Guiter<br />
        Sutton<br />
        (917) 635-1805 <br />
        <a href="mailto:kristin@suttonpr.com">kristin@suttonpr.com</a>
      </p>
    </div>
  </div>
)

export default ContactPage
