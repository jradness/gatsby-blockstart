import * as React from 'react'
import './about-page.scss'
import AboutHeader from './header/about-header'
import PartnersImg from './partnersImg/partners-img'
import AboutCompText from './aboutCompText/about-comp-text'
import DevEducation from './devEducation/dev-education'
import Team from './team/team'

const AboutPage = () => {
  return (
    <div className="container container-body-4">
      <AboutHeader/>
      <PartnersImg/>
      <div className="text-wrapper">
        <AboutCompText/>
      </div>
      <div className="hr-line"/>
      <DevEducation/>
      <div className="hr-line"/>
      <Team/>
    </div>
  )
}

export default AboutPage