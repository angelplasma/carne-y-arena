import React from 'react'

import styles from './info.module.scss'
import backpackIcon from '../images/backpack.svg'
import eyeIcon from '../images/eye.svg'
import cameraIcon from '../images/camera.svg'
import chipIcon from '../images/chip.svg'
import compassIcon from '../images/compass.svg'
import formIcon from '../images/form.svg'

const InfoPage = () => (
  <div styleName="container">
    <h1 className="screenreader-only">Additional Information</h1>

    <div styleName="intro">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        voluptatem similique dolores, hic, incidunt non saepe sit doloribus
        labore nostrum laborum ea illum, ab ullam debitis animi veniam
        mollitia suscipit?
      </p>
    </div>

    <ul styleName="grid">
      <li styleName="box">
        <img src={backpackIcon} alt="" styleName="icon" />
        <span>CARNE y ARENA is a virtual reality work that is highly immersive and can feel extremely realistic at times.</span>
      </li>

      <li styleName="box">
        <img src={eyeIcon} alt="" styleName="icon" />
        <span>CARNE y ARENA is not recommended for individuals with claustrophobia, heart conditions, back conditions, a history of seizures, epilepsy, and/or sensitivity to flashing lights.</span>
      </li>

      <li styleName="box">
        <img src={cameraIcon} alt="" styleName="icon" />
        <span>No photography or other documentation of the work is permitted.</span>
      </li>

      <li styleName="box">
        <img src={chipIcon} alt="" styleName="icon" />
        <span>Due to the complex technology employed, the installation may require unplanned maintenance; resulting in delays or cancellation. If it is not possible to reschedule a delayed or cancelled visit, a full refund will be issued.</span>
      </li>

      <li styleName="box">
        <img src={compassIcon} alt="" styleName="icon" />
        <span>We recommend that you arrive at least 30 minutes prior to your appointment time.</span>
      </li>

      <li styleName="box">
        <img src={formIcon} alt="" styleName="icon" />
        <span>Waiver and release of liability will be available on-site and must be signed before participating. For visitors ages 13 to 17, a guardian must be present to sign the waiver and release of liability at the time of the visit.</span>
      </li>
    </ul>
  </div>
)

export default InfoPage
