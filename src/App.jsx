import './App.css'
import { Button } from './Button'
import useCount from './store'

function App() {
  const [count, setCount] = useCount()

  return (
    <>
      <h1>Remote</h1>

      <Button />

      <button className={'shared-btn'} onClick={() => setCount((s) => s + 1)}>
          Click me { count }
      </button>
    </>
  )
}

export default App
