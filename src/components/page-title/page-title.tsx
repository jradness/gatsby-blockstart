import * as React from 'react'
import './page-title.scss'

const PageTitle = (title: string) => {
  return (
    <div className="title-wrapper">
      <h1 className="page-title">{title}</h1>
    </div>
  )
}

export default PageTitle