import React from 'react'
import Link from 'gatsby-link'

import Nav from '../../components/nav'
import styles from './end.module.scss'

const EndPanel = ({nav}) => (
  <section styleName="panel">
    <img src="//placehold.it/600x800?text=FPO" alt="" styleName="heart" />

    <div styleName="text">
      <p>
        It’s hard to talk about a reality that, for many of us, is a few
        hundred miles away. Carne y Arena bridges that gap — giving us the
        chance to experience a piece of someone else’s journey.
      </p>

      <Link to="#TODO" className="button">
        Get Tickets
      </Link>
    </div>

    <hr styleName="divider"/>

    <div styleName="nav">
      <Nav data-context="panel" />
    </div>

    <footer styleName="footer">
      <p>Produced and Financed by [TODO]</p>
      <ul styleName="logo-list">
        <li><img src="//placehold.it/140x40?text=LOGO" alt=""/></li>
        <li><img src="//placehold.it/140x40?text=LOGO" alt=""/></li>
        <li><img src="//placehold.it/140x40?text=LOGO" alt=""/></li>
      </ul>
    </footer>
  </section>
)

export default EndPanel
