export default function Assembly() {
  return (
    <>
      <div className="projectPage">
        <img src={"/PipelineCPU.png"} />
        <h1>RISC ISA Implementation</h1>
        <p>
          The ISA is a custom simple RISC architecture similar to something like LEGv8 (an academic subset of the Arm
          ISA). The assembler would take files written in the custom assembly language for the ISA and output an
          intermediate object file. This object file would then be used by the linker which can take multiple object
          files and output the machine code to be used on the simulator. The intermediate object files are necessary to
          allow code reuse and things like libraries, where code can be imported into your own assembly program. The
          simulator was a behavioral simulator of a pipelined processor featuring data forwarding and simple branch
          prediciton, the image above is a visualization of the simulated processor.
        </p>
      </div>
    </>
  );
}
