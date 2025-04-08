export default function OS() {
  return (
    <>
      <div className="projectPage">
        <h1>Operating System Components</h1>
        <p>Operating system pager, file server, and thread library implemented in C++.</p>
        <p>The OS pager manages memory by moving pages between physical memory, file space, and swap space. All transfers are done while translating between virtual and physical memory for every memory access by a program.</p>
        <p>The file server manages accepts TCP requests allowing multiple users to create, delete, write, and read files with consistency and crash safety. </p>
        <p>The thread library created an api of mutexes and conditional variables for the user to manage their threads. These features were implemented using a scheduler that swaps linux stack frames to change the current application being executed to balance execution of threads. The library also gracefully handles system interrupts.</p>
      </div>
    </>
  )
}
