import * as React from 'react'
import './code-snippets.scss'
import { IMAGE } from '../../../util/image-path'
import CodeBox from '../../../components/snippets/snippet'

const CodeSnippets = () => {
  return (
      <div className="container code-container">
        <div className="tech-img-wrapper">
          <img src={IMAGE.technologiesImg} alt="blockchain technologies"/>
          <h2 className="tech-text">Get started with a few lines of code</h2>
        </div>
        <CodeBox/>
      </div>
  )
}

export default CodeSnippets