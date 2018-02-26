import React from 'react'

import { TICKETS_URL } from '../../lib/constants'
import styles from './location.module.scss'
import metroIcon from '../images/metro.svg'
import busIcon from '../images/bus.svg'
import carIcon from '../images/car.svg'

const LocationPage = () => (
  <div styleName="container">
    <div styleName="location">
      <h1 styleName="title">Carne y Arena Location:</h1>

      <address styleName="address">
        1611 Benning Rd NE<br />
        Washington, DC 20002
      </address>

      <a href={TICKETS_URL} className="button" rel="noopener">Reserve Your Space</a>
    </div>

    <div styleName="directions">
      <h2 styleName="transportation-type">By Metro:</h2>
      <img src={metroIcon} alt="" styleName="icon" />
      <p styleName="transportation-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla adipisci
        minus, excepturi eveniet facilis numquam quos culpa.
      </p>

      <h2 styleName="transportation-type">By Bus:</h2>
      <img src={busIcon} alt="" styleName="icon" />
      <p styleName="transportation-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veritatis
        consequatur autem reiciendis iure inventore magni dolores.
      </p>

      <h2 styleName="transportation-type">By Car:</h2>
      <img src={carIcon} alt="" styleName="icon" />
      <p styleName="transportation-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a libero
        placeat nostrum ullam, quo laudantium veritatis in perferendis.
      </p>
    </div>
  </div>
)

export default LocationPage
