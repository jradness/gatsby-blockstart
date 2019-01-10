import * as React from 'react'
import { PageHeaderTitle } from '../../../data/page-header-title'
import PageTitle from '../../../components/page-title/page-title'

const AboutHeader = () => {
  return (
    <div className="container">
      {PageTitle(PageHeaderTitle.aboutTitle.title)}
    </div>
  )
}

export default AboutHeader