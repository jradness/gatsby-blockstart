import * as React from 'react'
import './codeblock.scss'

const UnityCode = () => {
  return (
    <pre className="box">
      <ol>
        <li><span className="hl-comment">// Import Blockstart</span></li>
        <li><span className="hl-3">using</span> <span className="hl-4"> Blockstart</span>;</li>
        <li/>
        <li><span className="hl-comment">// Design your asset</span></li>
        <li><span className="hl-4">Asset</span> trading card <span className="hl-3"> = new </span><span className="hl-4">Asset</span>();</li>
        <li>tradingCard.AssetName<span className="hl-3"> = </span><span className="hl-6">"Crypt Keeper"</span>;</li>
        <li>tradingCard.TotalSupply<span className="hl-3"> = </span><span className="hl-5">10</span></li>
        <li>tradingCard.AutoMint<span className="hl-3"> = </span><span className="hl-4 italic">true</span></li>
        <li>tradingCard.Transferable<span className="hl-3"> = </span><span className="hl-4 italic">true</span></li>
        <li>tradingCard.AssetDescription<span className="hl-3"> = </span><span className="hl-6">"Crypt Keeper trading card."</span>;</li>
        <li/>
        <li><span className="hl-comment">// Publish it!</span></li>
        <li>tradingCard.<span className="hl-4">LaunchAsset</span>();</li>
      </ol>
  </pre>
  )
}

export default UnityCode