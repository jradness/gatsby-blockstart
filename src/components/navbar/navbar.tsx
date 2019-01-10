import * as React from 'react'
import { IMAGE } from '../../util/image-path'
import './navbar.scss'
import Link from 'gatsby-link'

const Navbar = () => (
      <nav className="navbar">
        <div className="container nav-container">
          <div className="brand-wrapper">
            <img className="brand-logo" src={IMAGE.blockstartIcon} alt=""/>
            <Link to="/" className="brand-item">Blockstart</Link>
          </div>
          <div className="nav-links">
            <Link className="nav-item disabled" to="/">Use Cases</Link>
            <Link className="nav-item disabled" to="/">Documentation</Link>
            <Link className="nav-item" to="plans">Plans</Link>
            <Link className="nav-item" to="about">About</Link>
            <Link className="nav-item disabled" to="/">Contact</Link>
          </div>
        </div>
      </nav>
    )

export default Navbar