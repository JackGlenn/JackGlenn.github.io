import Image from "next/image";
import styles from "./page.module.css";
import PortfolioItem from './PortfolioItem'
// import image from '/JackOfHearts.png'
// import test from "/test.jpg"

export default function Home() {
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
          <PortfolioItem link={"a"} image={"/JackOfHearts.png"} name={"first"} description={"=========================================================================="}/>
          <PortfolioItem link={"a"} image={"/JackOfHearts.png"} name={"second"} description={"description"}/>

        </div>
        <div className="flexCol">
          <PortfolioItem link={"a"} image={"/test.jpg"} name={"third"} description={"description"}/>
          <PortfolioItem link={"a"} image={"https://loremflickr.com/320/240"} name={"fourth"} description={"description"}/>
        </div>
        <div className="flexCol">
          <PortfolioItem link={"a"} image={"/JackOfHearts.png"} name={"fifth"} description={"description"}/>
          <PortfolioItem link={"a"} name={"sixth"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet quas reprehenderit neque sit, amet voluptatibus cupiditate qui iste asperiores minima incidunt numquam eius, soluta rem officiis. Cum, reprehenderit tenetur!"}/>

        </div>
      </div>
    </>
  )
}
