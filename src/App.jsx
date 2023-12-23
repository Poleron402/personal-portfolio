import Navbar from './components/Navbar'
import MyInfo from './components/MyInfo'
import { useEffect, useState } from 'react'


import './App.css'

function App() {

  const [mode, setMode] = useState(localStorage.getItem('mode'))
  // useEffect(()=>{
  //   localStorage.setItem({'mode':mode})
  // }, [mode])
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
