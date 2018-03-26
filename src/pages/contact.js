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
        <a href="mailto:kristin@suttonpr.com">kristin@suttonpr.com</a>
      </p>
    </div>

    <p>
      <a href="/Carne y Arena DC Press Release.pdf" className="button">View Press Release</a>
    </p>
  </div>
)

export default ContactPage
