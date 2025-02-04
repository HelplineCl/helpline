import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CustomMenu from './components/CustomMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomMenu/>
      <h1>Help Line</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
