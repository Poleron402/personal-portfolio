import Navbar from './components/Navbar'
import MyInfo from './components/MyInfo'
import { useEffect, useState } from 'react'


import './App.css'

function App() {

  const [mode, setMode] = useState()
  useEffect(()=>{
    console.log(localStorage.getItem('mode'))
    setMode(localStorage.getItem('mode'))
  }, [])
  return (
    <>
    <div  id={mode?"myLinked":"myLinked_dark"}>
    <Navbar mode={mode} setMode = {setMode}/>
    
    <MyInfo mode = {mode}/>
    </div>
    </>
  )
}

export default App
