import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.scss"

const IndexPage = () => (
  <div>
    <section styleName="sand-panel">
      <div styleName="text">
        <h2>How far can you walk in 6.5 minutes?</h2>
        <p>Now add sand and a 20 pound backpack. Add sun and take away water.</p>
        <p>¿Qué sientes? ¿Qué ves?</p>
        <p>Sometimes a short walk can take you a long way.</p>
        <p>Into another life.</p>
        <p>Another way of seeing.</p>
      </div>
    </section>

    <section styleName="map-panel">
      <div styleName="map-graphic">
        <img src="//placehold.it/820x460?text=FPO" alt=""/>
      </div>

      <div styleName="map-content">
        <h2>Carne y Arena unites the virtual with the physical.</h2>
        <p>Virtual reality technology is accompanied by the actual sensation of sand and wind — allowing us to live a fragment of an immigrant’s journey.</p>
        <Link to="/about" className="button">
          About the Exhibition
        </Link>
      </div>
    </section>

    <section styleName="quote-panel">
      [TODO]
    </section>

    <section styleName="end-panel">
      [TODO]
    </section>
  </div>
)

export default IndexPage
