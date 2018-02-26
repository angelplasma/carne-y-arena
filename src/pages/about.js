import React from 'react'

import { TICKETS_URL } from '../../lib/constants'
import styles from './about.module.scss'

const quoteText = `My intention was to experiment with VR technology to explore
  the <i>human</i> condition in an attempt to break the dictatorship of
  the frame, within which things are just <i>observed</i>`

const AboutPage = () => (
  <div styleName="container">
    <h1 className="screenreader-only">About the Exhibition</h1>

    <div styleName="content">
      <p>
        <b>Alejandro G. Iñárritu’s conceptual virtual reality installation  CARNE
        y ARENA</b> (Virtually present, Physically invisible) explores the human
        condition of immigrants and refugees. Based on true accounts, the
        superficial lines between subject and bystander are blurred and bound
        together, allowing individuals to walk in a vast space and thoroughly
        live a fragment of the refugees’ personal journeys. An immersive
        installation that reunites frequent collaborators Iñárritu and Emmanuel
        Lubezki alongside producer Mary Parent and ILMxLAB, CARNE y ARENA is
        centered around a 6½-minute virtual reality sequence for one person
        that employs state-of-the-art immersive technology to create a
        multi-narrative light space with human characters.
      </p>

      <p>
        “During the past four years in which this project has been growing in
        my mind, I had the privilege of meeting and interviewing many Mexican
        and Central American refugees. Their life stories haunted me, so I
        invited some of them to collaborate with me in the project,” Iñárritu
        says. “<span dangerouslySetInnerHTML={{ __html: quoteText }} />, and claim the space to allow the
        visitor to go through a direct experience walking in the immigrants’
        feet, under their skin, and into their hearts.”
      </p>

      <a href={TICKETS_URL} className="button" rel="noopener">Reserve Your Space</a>
    </div>

    <aside styleName="background">
      <blockquote>
        <p dangerouslySetInnerHTML={{ __html: `“${quoteText}.”` }} />
        <cite>Alejandro G. Iñárrito</cite>
      </blockquote>
    </aside>
  </div>
)

export default AboutPage
