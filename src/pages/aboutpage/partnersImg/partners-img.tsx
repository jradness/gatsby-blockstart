import * as React from 'react'
import './partners-img.scss'
import { IMAGE } from '../../../util/image-path'

const PartnersImg = () => {
  return (
    <div>
      <img className="about-partners-img" src={IMAGE.aboutPartnersImg} alt="About partners company image"/>
    </div>
  )
}

export default PartnersImg