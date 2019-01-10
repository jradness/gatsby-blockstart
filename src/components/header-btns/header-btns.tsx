import * as React from 'react'
import { Link } from 'gatsby'
import './header-btns.scss'

const HeaderBtns = () => {
  return (
    <div className="btn-wrapper">
      <Link to="about">
        <button className="btn learn-btn">Learn More</button>
      </Link>
      <Link to="plans">
        <button className="btn plans-btn">See Plans</button>
      </Link>
    </div>
  )
}

export default HeaderBtns