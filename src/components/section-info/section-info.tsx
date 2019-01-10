import * as React from 'react'
import './section-info.scss'

const SectionInfo = (title: string, desc: string, style?: string) => {
  return (
    <div className="info-wrapper">
      <h1 className="info-title" id={style}>{title}</h1>
      <p className="info-description">{desc}</p>
    </div>
  )
}

export default SectionInfo