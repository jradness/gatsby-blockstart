import * as React from 'react'
import './private-network.scss'
import SectionInfo from '../../../components/section-info/section-info'
import { Info } from '../../../data/section-text'
import { IMAGE } from '../../../util/image-path'

const Network = () => {
  return (
    <div className="container network-container">
      <div className="info-box">
        {SectionInfo(Info.infoTwo.title, Info.infoTwo.description)}
      </div>
      <img className="info-img" src={IMAGE.networkImg} alt="blockchain network image"/>
    </div>
  )
}

export default Network