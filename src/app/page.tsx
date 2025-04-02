import PortfolioItem from './PortfolioItem'
// import image from '/JackOfHearts.png'
// import test from "/test.jpg"

export default function Home() {
  return (
    <>
      <div className="bio">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet quas reprehenderit neque sit, amet voluptatibus cupiditate qui iste asperiores minima incidunt numquam eius, soluta rem officiis. Cum, reprehenderit tenetur!</p>
      </div>
      <div className="contentGrid">
        <div className="flexCol">
          <PortfolioItem link={"NeonHammer"} image={"/NeonHammer.png"} name={"Neon Hammer"} description={"Fast paced action game built in Unity"}/>
          <PortfolioItem link={"VisionTransformer"} name={"Vision Transformer"} description={'Implementation of the Google paper “An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale” '}/>
        </div>
        <div className="flexCol">
          <PortfolioItem link={"OperatingSystem"} name={"Operating System Components"} description={"Operating system pager, file server, and thread library implemented in C++"}/>
          <PortfolioItem link={"Assembly"} name={"RISC ISA Implementation"} description={"Assembler, linker, and simulator for a custom RISC instruction set architecture and assembly language in C"}/>
        </div>
      </div>
    </>
  )
}
