import React from 'react'

import { TICKETS_URL } from '../../lib/constants'
import styles from './location.module.scss'

const LocationPage = () => (
  <div styleName="container">
    <div styleName="content">
      <h1>Carne y Arena Location:</h1>

      <p>
        <address>
          1611 Benning Rd NE<br />
          Washington, DC 20002
        </address>
      </p>

      <a href={TICKETS_URL} className="button" rel="noopener">Get Tickets</a>
    </div>
  </div>
)

export default LocationPage
