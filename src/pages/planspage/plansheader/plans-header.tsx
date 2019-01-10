import * as React from 'react'
import './plans-header.scss'
import { PageHeaderTitle } from '../../../data/page-header-title'
import PageTitle from '../../../components/page-title/page-title'

const PlansHeader = () => {
  return (
    <div className="container plans-header-container">
      {PageTitle(PageHeaderTitle.plansTitle.title)}
    </div>
  )
}

export default PlansHeader