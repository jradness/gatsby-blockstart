import * as React from 'react'
import './snippets.scss'
import KotlinCode from './codeblock/kotlin'
import SwiftCode from './codeblock/swift'
import UnityCode from './codeblock/unity'

interface state {
  tabSelected: Snippet;
}

enum Snippet {
  SWIFT,
  ANDROID,
  UNITY,
}

class CodeBox extends React.Component<{}, state> {
  constructor(props: any) {
    super(props)
    this.state = { tabSelected: Snippet.SWIFT }
  }

  updateSnippet = (tab: Snippet) => {
    switch (tab) {
      case Snippet.SWIFT:
        return (
          <SwiftCode/>
        )
      case Snippet.ANDROID:
        return (
          <KotlinCode/>
        )
      case Snippet.UNITY:
        return (
          <UnityCode/>
        )
      default:
        return (
          <SwiftCode/>
        )
    }
  }

  selectedSnippet = (id: Snippet) => {
    this.setState({ tabSelected: id })
    this.forceUpdate();
  }

  render() {
    const selectedId = this.state.tabSelected;
    const swiftSelected = selectedId === Snippet.SWIFT ? 'active' : null;
    const androidSelected = selectedId === Snippet.ANDROID ? 'active' : null;
    const unitySelected = selectedId === Snippet.UNITY ? 'active' : null;
    return (
      <div>
        <div className="tabs">
          <div className={`tab ${swiftSelected}`} onClick={() => this.setState({tabSelected: Snippet.SWIFT})}>
            <div className="tab-box">SWIFT</div>
          </div>
          <div className={`tab ${androidSelected}`} onClick={() => this.setState({tabSelected: Snippet.ANDROID})}>
            <div className="tab-box">ANDROID</div>
          </div>
          <div className={`tab ${unitySelected}`} onClick={() => this.setState({tabSelected: Snippet.UNITY})}>
            <div className="tab-box">UNITY</div>
          </div>
        </div>
        {this.updateSnippet(this.state.tabSelected)}
        <div className="code-footer">Made with ❤️ by engineers at Devslopes</div>
      </div>

    )
  }
}

export default CodeBox