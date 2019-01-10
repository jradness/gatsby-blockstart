import * as React from 'react'
import './header.scss'
import { IMAGE } from '../../../util/image-path'
import { Info } from '../../../data/section-text'
import SectionInfo from '../../../components/section-info/section-info'
import HeaderBtns from '../../../components/header-btns/header-btns'

const Header = () => {
  return (
    <div className="container header-container">
      <div className="header-info-wrapper">
        {SectionInfo(Info.infoOne.title, Info.infoOne.description, 'header-title')}
      </div>
      <HeaderBtns/>
      <img className="header-img" src={IMAGE.cityImgR} alt=""/>
    </div>
  )
}

export default Header