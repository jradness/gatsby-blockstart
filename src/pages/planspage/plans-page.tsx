import * as React from 'react'
import './plans-page.scss'
import PlansHeader from './plansheader/plans-header'
import PlansCard from '../../components/plans-card/plans-card'
import { PlanCardData } from '../../data/plan-card'

const PlansPage = () => {
  return (
    <div>
      <PlansHeader/>
      <div className="container">
        <div className="card-body-container">
          {PlansCard(
            PlanCardData.startupPlan.cardImg,
            PlanCardData.startupPlan.cardTitle,
            PlanCardData.startupPlan.cardDesc,
            PlanCardData.startupPlan.cardBtnLabel,
            PlanCardData.startupPlan.cardBullets)}
          {PlansCard(
            PlanCardData.businessPlan.cardImg,
            PlanCardData.businessPlan.cardTitle,
            PlanCardData.businessPlan.cardDesc,
            PlanCardData.businessPlan.cardBtnLabel,
            PlanCardData.businessPlan.cardBullets,
            'business-btn')}
        </div>
      </div>
    </div>
  )
}

export default PlansPage