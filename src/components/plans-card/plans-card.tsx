import * as React from 'react'
import './plans-card.scss'
import { IMAGE } from '../../util/image-path'

const PlansCard = (cardImg: string, cardTitle: string, cardDesc: string, cardBtnLabel: string, cardBullet: Array<any>, style?: string) => {
  return (
    <div className="plan-card-wrapper">
      <div className="plan-card-body">
        <div className="card-img">
          <img className="card-top-img" src={cardImg} alt="Office Meeting"/>
        </div>
        <div className="plan-card">
          <h1 className="card-title">{cardTitle}</h1>
          <div className="card-desc-wrapper">
            <div className="card-desc">{cardDesc}</div>
          </div>
          <div className="card-btn-wrapper">
            <button className="card-btn" id={style}>{cardBtnLabel}</button>
          </div>
          <div className="card-bullet-wrapper">
            {cardBullet.map((bullet) =>
              <div className="bullet-cell">
                <img className="bullet-icon" src={IMAGE.cube} alt="Blockstart cube icon"/>
                <div className="bullet-feature">{bullet.bullet}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlansCard