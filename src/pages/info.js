import React from 'react'

import styles from './info.module.scss'
import backpackIcon from '../images/backpack.svg'
import cameraIcon from '../images/camera.svg'
import chipIcon from '../images/chip.svg'
import compassIcon from '../images/compass.svg'
import eyeIcon from '../images/eye.svg'
import formIcon from '../images/form.svg'
import glassesIcon from '../images/glasses.svg'

const InfoPage = () => (
  <div styleName="container">
    <h1 className="screenreader-only">Visitor Information</h1>

    <ul styleName="grid">
      <li styleName="box">
        <img src={compassIcon} alt="" styleName="icon" />
        <strong>We recommend that you arrive at least 30 minutes prior to your appointment time.</strong>
      </li>

      <li styleName="box">
        <img src={backpackIcon} alt="" styleName="icon" />
        <span>CARNE y ARENA is a virtual reality work that is highly immersive and can feel extremely realistic including experiences with firearms.</span>
      </li>

      <li styleName="box">
        <img src={cameraIcon} alt="" styleName="icon" />
        <span>No photography or other documentation of the work is permitted.</span>
      </li>

      <li styleName="box">
        <img src={chipIcon} alt="" styleName="icon" />
        <span>Due to the complex technology employed, the installation may require unplanned maintenance, resulting in delays or cancellation.</span>
      </li>

      <li styleName="box">
        <img src={formIcon} alt="" styleName="icon" />
        <span>Waiver and release of liability will be available on-site and must be signed before participating. For visitors ages 14 to 17, a guardian must be present to sign the waiver and release of liability at the time of the visit.</span>
      </li>

      <li styleName="box">
        <img src={eyeIcon} alt="" styleName="icon" />
        <span>CARNE y ARENA is not recommended for individuals with claustrophobia, heart conditions, back conditions, a history of seizures, epilepsy, and/or sensitivity to flashing lights.</span>
      </li>

      <li styleName="box">
        <img src={glassesIcon} alt="" styleName="icon" />
        <span>Pack light and wear shoes that are easy to remove. If you have thick eye glass frames, wearing contacts is recommended but not necessary. Along with your shoes, bags and backpacks must be placed in a small locker as you enter.</span>
      </li>
    </ul>
  </div>
)

export default InfoPage
