import React from 'react'

import { TICKETS_URL } from '../../lib/constants'
import styles from './location.module.scss'
import metroIcon from '../images/metro.svg'
import busIcon from '../images/bus.svg'
import carIcon from '../images/car.svg'
import streetcarIcon from '../images/streetcar.svg'

const LocationPage = () => (
  <div styleName="container">
    <div styleName="location">
      <h1 styleName="title">Carne y Arena Location:</h1>

      <address styleName="address">
        1611 Benning Road NE<br />
        Washington, D.C. 20002
      </address>

      <a href={TICKETS_URL} className="button" rel="noopener">Reserve Your Space</a>
    </div>

    <div styleName="directions">
      <h2 styleName="transportation-type">By Bus:</h2>
      <img src={busIcon} alt="" styleName="icon" />
      <p styleName="transportation-text">
        Accessible via X1, X2, X3 and X9 buses.
      </p>

      <h2 styleName="transportation-type">By Metro:</h2>
      <img src={metroIcon} alt="" styleName="icon" />
      <p styleName="transportation-text">
        Take Orange line to New Carrollton and get off at Stadium-Armory Station
        to pick up the B2 bus to MT Rainier, get off at 15th St. NE & Benning Rd
        NE and it will be a 3 minute walk to exhibit.
      </p>

      <h2 styleName="transportation-type">By Streetcar:</h2>
      <img src={streetcarIcon} alt="" styleName="icon" />
      <p styleName="transportation-text">
        From Union Station, take the DC Streetcar at H Street & 3rd Street
        NE towards Benning Road. Exit at Benning Road & 15th Street NE stop.
        From there it will be a 2 minute walk to the exhibit. The DC Streetcar
        is free.
      </p>

      <h2 styleName="transportation-type">By Car:</h2>
      <img src={carIcon} alt="" styleName="icon" />
      <p styleName="transportation-text">
        Benning Road NE and 16th St. NE (immediately past the H
        Street corridor, in front of Hechinger Mall). <b>Limited parking
        available on site.</b>
      </p>
    </div>
  </div>
)

export default LocationPage
