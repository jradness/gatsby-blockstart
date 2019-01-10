import * as React from 'react'
import './build-tools.scss'
import { IMAGE } from '../../../util/image-path'
import { Info } from '../../../data/section-text'
import SectionInfo from '../../../components/section-info/section-info'

const BuildTools = () => {
  return (
    <div className="container-body-4 tool-container">
      <img className="tools-img" src={IMAGE.buildToolsImgL} alt="blockchain tools"/>
      <div className="container info-box">
        {SectionInfo(Info.infoThree.title, Info.infoThree.description)}
      </div>
    </div>
  )
}

export default BuildTools