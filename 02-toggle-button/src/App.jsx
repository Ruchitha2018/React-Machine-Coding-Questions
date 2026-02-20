
import './App.css'
import useToggle from './custom-hooks/useToggle'

function App() {
  const [isOn, toggle] = useToggle(false)
  return (
    <>
    <button onClick={toggle}>{isOn ? "ON": "OFF"}</button>
    </>
  )
}

export default App
