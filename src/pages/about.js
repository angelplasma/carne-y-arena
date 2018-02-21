import React from 'react'

import { TICKETS_URL } from '../../lib/constants'
import styles from './about.module.scss'

const quoteText = `
  My intention was to experiment with VR technology to explore the human
  condition in an attempt to break the dictatorship of the frame, within
  which things are just observed
`
const AboutPage = () => (
  <div styleName="container">
    <div styleName="content">
      <h1>About the Exhibition</h1>

      <p>
        Alejandro G. Iñárritu’s conceptual virtual reality installation  CARNE
        y ARENA (Virtually present, Physically invisible) explores the human
        condition of immigrants and refugees. Based on true accounts, the
        superficial lines between subject and bystander are blurred and bound
        together, allowing individuals to walk in a vast space and thoroughly
        live a fragment of the refugees’ personal journeys. An immersive
        installation that reunites frequent collaborators Iñárritu and Emmanuel
        Lubezki alongside producer Mary Parent and ILMxLAB, CARNE y ARENA is
        centered around a 6 ½-minute virtual reality sequence for one person
        that employs state-of-the-art immersive technology to create a
        multi-narrative light space with human characters.
      </p>

      <p>
        “During the past four years in which this project has been growing in
        my mind, I had the privilege of meeting and interviewing many Mexican
        and Central American refugees. Their life stories haunted me, so I
        invited some of them to collaborate with me in the project,” Iñárritu
        says. “{quoteText}, and claim the space to allow the
        visitor to go through a direct experience walking in the immigrants’
        feet, under their skin, and into their hearts.”
      </p>

      <a href={TICKETS_URL} className="button" rel="noopener">Get Tickets</a>
    </div>

    <aside styleName="background">
      <blockquote>
        “{quoteText}.”
        <cite>Alejandro G. Iñárrito</cite>
      </blockquote>
    </aside>
  </div>
)

export default AboutPage
