import * as React from 'react'
import './codeblock.scss'

const KotlinCode = () => {
  return (
    <pre className="box">
      <ol>
        <li><span className="hl-comment">// Put this in your build.gradle file</span></li>
        <li>implementation</li>
        <li><span className="hl-2">'com.blockstart.blockstartsdk:android-blockstart-sdk:1.0.0'</span></li>
        <li/>
        <li><span className="hl-comment">// Then in your code file:</span></li>
        <li><span className="hl-comment">// Design your cryptocurrency</span></li>
        <li><span className="hl-3">val</span> <span className="hl-4"> coolCoin </span><span className="hl-1 bold">=</span> Token (</li>
        <li className="dent">tokenName<span className="hl-3 bold">:</span><span className="hl-6"> "Cool Coin"</span>,</li>
        <li className="dent">totalSupply<span className="hl-3 bold">:</span> <span className="hl-5">100000000.0</span>,</li>
        <li className="dent">decimals<span className="hl-3 bold">:</span> <span className="hl-5">6.0</span>,</li>
        <li className="dent">mutable<span className="hl-3 bold">:</span> <span className="hl-4 italic">false</span>)</li>
        <li/>
        <li><span className="hl-comment">// Publish it</span></li>
        <li>coolCoin<span className="hl-3 bold">.</span><span className="hl-5">launchToken</span>()</li>
      </ol>
    </pre>
  )
}

export default KotlinCode