import Navbar from './components/Navbar'
import MyInfo from './components/MyInfo'
import { useEffect, useState } from 'react'


import './App.css'

function App() {

  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode"))!== null ? JSON.parse(localStorage.getItem("mode")) : false)
  const onClickHandler=()=>{
    localStorage.setItem("mode", JSON.stringify(!mode))
    setMode(JSON.parse(localStorage.getItem("mode")))
  }
  return (
    <>
    <div  id={mode?"myLinked":"myLinked_dark"}>
    <Navbar mode={mode} setMode = {setMode} onClickHandler = {onClickHandler}/>
    
    <MyInfo mode = {mode}/>
    </div>
    </>
  )
}

export default App
