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
                <td>Add contents of regA with contents of regB, store result in destReg.</td>
              </tr>
              <tr>
                <td>nor</td>
                <td>0b001</td>
                <td>Nor contents of regA with contents of regB, store results in destReg. This is a bitwise nor.</td>
              </tr>
              <tr>
                <td>lw</td>
                <td>0b010</td>
                <td>"Load Word", Load regB from memory. Memory address is formed by adding offsetField with the contents of regA. Behavior is defined only for memory addresses in the range [0, 65535].</td>
              </tr>
              <tr>
                <td>sw</td>
                <td>0b011</td>
                <td>"Store Word", Store regB into memory. Memory address is formed by adding offsetField with the contents of regA. Behavior is defined only for memory addresses in the range [0,65535].</td>
              </tr>
              <tr>
                <td>beq</td>
                <td>0b100</td>
                <td>"Branch if equal", if the contents of regA and regB are the same, then branch to the address PC+1+offsetField, where PC is the address of this beq instruction.</td>
              </tr>
              <tr>
                <td>jalr</td>
                <td>0b101</td>
                <td>"Jump and Link Register", First store the value PC+1 in to regB, where PC is the address where this jalr instruction is defined. Then branch (set PC) to the address contained in regA. Note that this implies if regA nad regB refer to the same register, the net effect will be jumping to PC+1.</td>
              </tr>
              <tr>
                <td>halt</td>
                <td>0b110</td>
                <td>Increment the PC (as with all instructions), then halt the machine (let the simulator notice that the machine halted).</td>
              </tr>
              <tr>
                <td>noop</td>
                <td>0b111</td>
                <td>"No Operation", Do nothing besides update the PC.</td>
              </tr>
            </tbody>
          </table>
          <p></p>
          <p></p>
        </div>
      </>
    )
  }
  