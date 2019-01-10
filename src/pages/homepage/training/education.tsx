import * as React from 'react'
import './education.scss'
import SectionInfo from '../../../components/section-info/section-info'
import { Info } from '../../../data/section-text'
import { IMAGE } from '../../../util/image-path'

const EducationTraining = () => {
  return (
    <div className="container-body-4 education-container">
      <div className="education-info">
        {SectionInfo(Info.infoFour.title, Info.infoFour.description, 'education-title')}
      </div>
      <img className="help-img" src={IMAGE.helpImg} alt="Education and Training image"/>
      <div className="help-title-wrapper">
        <div className="help-title">On Site Training</div>
        <div className="help-title">On Site Training</div>
        <div className="help-title">On Site Training</div>
      </div>
    </div>
  )
}

export default EducationTraining