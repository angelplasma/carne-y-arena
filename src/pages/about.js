import React from 'react'

import { TICKETS_URL } from '../../lib/constants'
import styles from './about.module.scss'

const AboutPage = () => (
  <div styleName="container">
    <h1 className="screenreader-only">About the Exhibition</h1>

    <p>
      Academy Award®-winning director Alejandro G. Iñárritu’s conceptual virtual
      reality installation CARNE y ARENA (Virtually present, Physically invisible)
      explores the human condition of immigrants and refugees. Based on true accounts
      from Central American and Mexican refugees, CARNE y ARENA blurs and binds
      together the superficial lines between subject and bystander, allowing
      individuals to walk in a vast space and live a fragment of a refugee’s personal
      journey. Awarded a special Oscar last year, CARNE y ARENA is a six-and-a-half-
      minute solo experience that employs state-of-the-art technology to create a
      multi-narrative space with human characters. The project reunites frequent
      collaborators Iñárritu and three-time Academy Award®-winning cinematographer
      Emmanuel Lubezki, alongside producer Mary Parent and ILMxLAB.
    </p>

    <p>
      CARNE y ARENA premiered last May at the 70th Cannes Film Festival prior to
      touring internationally to the Fondazione Prada in Milan, the Tlatelolco
      University Cultural Center in Mexico City and the Los Angeles County Museum of
      Art (LACMA).
    </p>

    <p>
      “During the past five years in which this project has been growing in my
      mind, I had the privilege of meeting and interviewing many Mexican and Central
      American refugees. Their life stories haunted me, so I invited some of them to
      collaborate with me in the project, I’ve experimented with VR technology to
      explore the human condition in an attempt to break the dictatorship of the
      frame—within which things are just observed—and claim the space to allow the
      visitor to go through a direct experience walking in the immigrants’ feet, under
      their skin, and into their hearts.” — Alejandro G. Iñárritu
    </p>

    <a href={TICKETS_URL} className="button" rel="noopener">Reserve Your Space</a>
  </div>
)

export default AboutPage
