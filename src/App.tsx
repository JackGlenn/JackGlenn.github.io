// import { useState } from 'react'
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
      <div className="bio">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet quas reprehenderit neque sit, amet voluptatibus cupiditate qui iste asperiores minima incidunt numquam eius, soluta rem officiis. Cum, reprehenderit tenetur!</p>
      </div>
      <div className="contentGrid">
        <div className="flexCol">
          <PortfolioItem link={"a"} image={image} name={"first"} description={"=========================================================================="}/>
          <PortfolioItem link={"a"} image={vite} name={"second"} description={"description"}/>

        </div>
        <div className="flexCol">
          <PortfolioItem link={"a"} image={test} name={"third"} description={"description"}/>
          <PortfolioItem link={"a"} image={"https://loremflickr.com/320/240"} name={"fourth"} description={"description"}/>
        </div>
        <div className="flexCol">
          <PortfolioItem link={"a"} image={image} name={"fifth"} description={"description"}/>
        </div>
      </div>
    </>
  )
}

export default App
