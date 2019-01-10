import * as React from 'react'
import './codeblock.scss'

const SwiftCode = () => {
  return (
    <pre className="box">
      <ol>
        <li><span className="hl-3">Import</span> <span className="hl-4"> Blockstart</span></li>
        <li><span className="hl-comment">// Design your cryptocurrency</span></li>
        <li/>
        <li><span className="hl-4">let</span> coolCoin<span className="hl-3"> = </span><span className="hl-5">Token</span>()</li>
        <li>coolCoin.tokenName<span className="hl-3"> = </span><span className="hl-6">"Cool Coin"</span></li>
        <li>coolCoin.totalSupply<span className="hl-3"> = </span><span className="hl-5">100000000</span></li>
        <li>coolCoin.decimals<span className="hl-3"> = </span><span className="hl-5">6</span></li>
        <li>coolCoin.mutable<span className="hl-3"> = </span><span className="hl-4 italic">false</span></li>
        <li/>
        <li><span className="hl-comment">// Publish it!</span></li>
        <li>coolCoin.<span className="hl-5">launchToken</span>()</li>
      </ol>
  </pre>
  )
}

export default SwiftCode