import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello Cogito!</h1>
        <button onClick={() => setCount(count + 1)}>UP STATE</button>
        <br />
        {count}
      </div>
    </>
  )
}

export default App
