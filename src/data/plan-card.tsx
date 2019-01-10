import { IMAGE } from '../util/image-path'

export const PlanCardData = {
  startupPlan: {
    cardImg: IMAGE.startupImg,
    cardTitle: 'Startups',
    cardDesc: 'For new ventures with less than $1M in annual revenue and 10 team members or less',
    cardBtnLabel: 'CHOOSE STARTUP',
    cardBullets: [
      { bullet: 'Create and launch your blockchain network' },
      { bullet: 'Simple Node Starter Package' },
      { bullet: 'Access to Blockstart tooling & SDKs, & documentation' },
      { bullet: '15 hours/mo in support' },
      { bullet: 'Online Startup Blockchain Training Package (Optional)' },
    ],
  },
  businessPlan: {
    cardImg: IMAGE.businessImg,
    cardTitle: 'Businesses',
    cardDesc: 'For businesses with over $1M in annual revenue and established infrastructure',
    cardBtnLabel: 'CHOOSE BUSINESS',
    cardBullets: [
      { bullet: 'Create and launch your blockchain network' },
      { bullet: 'Enterprise Node Package' },
      { bullet: 'Access to Blockstart tooling & SDKs, & documentation' },
      { bullet: '25 hours/mo in support' },
      { bullet: 'Online or On-site Enterprise Blockchain Training Package (Optional)' },
    ],
  },
}