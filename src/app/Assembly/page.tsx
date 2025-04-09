export default function VisionTransformer() {
    return (
      <>
        <div className="projectPage">
          <h1>RISC ISA Implementation</h1>
          <p>The custom instruction set architecture is simple example architecture but is capable of general computing. The table below is a description of the instructions.</p>
          <table>
            <thead>
              <tr>
                <th>Instruction Name</th>
                <th>Instruction Opcode (binary)</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>add</td>
                <td>0b000</td>
                <td>Add contents of <b>regA</b> with contents of <b>regB</b>, store result in <b>destReg.</b></td>
              </tr>
              <tr>
                <td>nor</td>
                <td>0b001</td>
                <td>Nor contents of <b>regA</b> with contents of <b>regB</b>, store results in <b>destReg</b>. This is a bitwise nor.</td>
              </tr>
              <tr>
                <td>lw</td>
                <td>0b010</td>
                <td>"Load Word", Load <b>regB</b> from memory. Memory address is formed by adding <b>offsetField</b> with the contents of <b>regA</b>. Behavior is defined only for memory addresses in the range [0, 65535].</td>
              </tr>
              <tr>
                <td>sw</td>
                <td>0b011</td>
                <td>"Store Word", Store <b>regB</b> into memory. Memory address is formed by adding <b>offsetField</b> with the contents of <b>regA</b>. Behavior is defined only for memory addresses in the range [0,65535].</td>
              </tr>
              <tr>
                <td>beq</td>
                <td>0b100</td>
                <td>"Branch if equal", if the contents of <b>regA</b> and <b>regB</b> are the same, then branch to the address <b>PC</b>+1+<b>offsetField</b>, where <b>PC</b> is the address of this beq instruction.</td>
              </tr>
              <tr>
                <td>jalr</td>
                <td>0b101</td>
                <td>"Jump and Link Register", First store the value <b>PC</b>+1 in to <b>regB</b>, where <b>PC</b> is the address where this jalr instruction is defined. Then branch (set <b>PC</b>) to the address contained in <b>regA</b>. Note that this implies if <b>regA</b> nad <b>regB</b> refer to the same register, the net effect will be jumping to <b>PC</b>+1.</td>
              </tr>
              <tr>
                <td>halt</td>
                <td>0b110</td>
                <td>Increment the <b>PC</b> (as with all instructions), then halt the machine (let the simulator notice that the machine halted).</td>
              </tr>
              <tr>
                <td>noop</td>
                <td>0b111</td>
                <td>"No Operation", Do nothing besides update the <b>PC</b>.</td>
              </tr>
            </tbody>
          </table>
          <h1>Assembly language</h1>
          <p></p>
          <p></p>
        </div>
      </>
    )
  }
  