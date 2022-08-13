import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)
  const [isLogged,setIsLogged] = useState(true)

  const changeLoggedStatus = () => setIsLogged(prev => !prev)

  return (
    <div className="App">
      {isLogged ? <Home /> :<Login changeValue={changeLoggedStatus}/>}
    </div>
  )
}

export default App
