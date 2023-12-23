import dark from '../assets/dark.svg'
import light from '../assets/light.svg'
function Navbar({mode, setMode}){
    const onClickHandler =()=>{
        setMode(!mode)
        localStorage.setItem("mode", mode+'')
    }
    return(<>
    <div id={mode?"navbar":"navbar_dark"}>
    <button id = "mode" onClick={()=>onClickHandler()}>
        {mode?<img src={dark} ></img>:<img src={light} id="btn-light"></img>}
    </button>   
        <a className={mode?"link link-in":"link_dark link-in-dark"} href="#">LinkedIN</a>
        <a className={mode?"link link-gh":"link_dark link-gh-dark"} href="#">GitHub</a>
        <a className={mode?"link link-res":"link_dark link-res-dark"} href="#">Resume</a>
    </div>
    </>)
}
export default Navbar