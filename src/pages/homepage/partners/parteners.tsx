import * as React from 'react'
import './partners.scss'
import { IMAGE } from '../../../util/image-path'
import { Info } from '../../../data/section-text'
import SectionInfo from '../../../components/section-info/section-info'

const Partners = () => {
  return (
    <div className="container partners-container">
      <div className="partner-info">
        {SectionInfo(Info.infoFive.title, Info.infoFive.description)}
      </div>
      <div className="partners-img-wrapper">
        <img className="partners-img" src={IMAGE.partnersImg} alt="Our Partners: Blockchain Training Alliance and Pearson Vue"/>
      </div>
    </div>
  )
}

export default Partners