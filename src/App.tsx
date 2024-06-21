import { useState } from 'react'
// import './App.css'
import image from '/JackOfHearts.png'

function App() {
  return (
    <div className="contentGrid">
      <div className="flexCol">
        <div className="portfolioItem">
          <img src={image} />
          <p>text</p>
        </div>
        <div className="portfolioItem">
          <img src={image} />
        </div>
      </div>
      <div className="flexCol">
        <div className="portfolioItem">
          <img src={image} />
        </div>
      </div>
      <div className="flexCol">
        <div className="portfolioItem">
          <img src={image} />
        </div>
      </div>
    </div>
  )
}

export default App
