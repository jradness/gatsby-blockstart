import * as React from 'react'
import Header from '../homepage/header/header'
import Network from '../homepage/network/private-network'
import BuildTools from '../homepage/tools/build-tools'
import CodeSnippets from '../homepage/codeSnippets/code-snippets'
import EducationTraining from '../homepage/training/education'
import Partners from '../homepage/partners/parteners'

const Home = () => (
  <div className="container-fluid">
    <Header/>
    <Network/>
    <BuildTools/>
    <CodeSnippets/>
    <EducationTraining/>
    <Partners/>
  </div>
)

export default Home