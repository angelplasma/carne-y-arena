import React from 'react'
import Link from 'gatsby-link'

import styles from './map.module.scss'

const MapPanel = () => (
  <section styleName="panel">
    <div styleName="graphic">
      <img src="//placehold.it/820x460?text=FPO" alt=""/>
    </div>

    <div styleName="content">
      <h2 styleName="heading">Carne y Arena unites the virtual with the physical.</h2>
      <p>Virtual reality technology is accompanied by the actual sensation of sand and wind — allowing us to live a fragment of an immigrant’s journey.</p>
      <Link to="/about" className="button">
        About the Exhibition
      </Link>
    </div>
  </section>
)

export default MapPanel
