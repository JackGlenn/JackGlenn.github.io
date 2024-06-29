import { useState } from 'react'
// import './App.css'
import image from '/JackOfHearts.png'

function App() {
  return (
    <div className="contentGrid">
      <div className="flexCol">
        <a href="a" className="portfolioItem">
          <img src={image} />
          <p className="description">text</p>
        </a>
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
