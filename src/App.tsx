import { useState } from 'react'
// import './App.css'
import PortfolioItem from './PortfolioItem.tsx'
import image from '/JackOfHearts.png'
import vite from "/vite.svg"
import test from "/test.jpg"


function App() {
  return (
    <>
      <div className='header'>
        <h1>Jack Glenn</h1>
      </div>
      <div className="contentGrid">
        <div className="flexCol">
          <PortfolioItem link={"a"} image={image} name={"first"} description={"=========================================================================="}/>
          <PortfolioItem link={"a"} image={vite} name={"second"} description={"description"}/>

        </div>
        <div className="flexCol">
          <PortfolioItem link={"a"} image={test} name={"third"} description={"description"}/>
          <PortfolioItem link={"a"} image={image} name={"fourth"} description={"description"}/>
        </div>
        <div className="flexCol">
          <PortfolioItem link={"a"} image={image} name={"fifth"} description={"description"}/>
        </div>
      </div>
    </>
  )
}

export default App
