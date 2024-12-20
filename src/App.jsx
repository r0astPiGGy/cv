import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className="text-3xl">Test</p>
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App
