import dark from '../assets/dark.svg'
import light from '../assets/light.svg'
function Navbar({mode, onClickHandler}){
    
    

    return(<>
    <div id={mode?"navbar":"navbar_dark"}>
    <button id = "mode" onClick={()=>onClickHandler()}>
        {mode?<img src={dark} ></img>:<img src={light} id="btn-light"></img>}
    </button>   
        <a href="https://www.linkedin.com/in/polina-mejia-432080284/" target="_blank" className={mode?"link link-in":"link_dark link-in-dark"}>LinkedIN</a>
        <a className={mode?"link link-gh":"link_dark link-gh-dark"} href="#">GitHub</a>
        <a target="_blank" className={mode?"link link-res":"link_dark link-res-dark"} href="https://docs.google.com/document/d/e/2PACX-1vTDE-avfRJoKDRk3SlGC_7wHPODWgyb_IPCe_jTh6wxRwz-sD6EnQLt8TxguCw_B0FyeiGrqjTaffsw/pub">Resume</a>
    </div>
    </>)
}
export default Navbar