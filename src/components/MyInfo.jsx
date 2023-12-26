import { SidePanels } from "./Side"
import { MainInfo } from "./MainInfo"
function MyInfo({mode}){
    return (<>
    <div id="main">
        <MainInfo mode={mode}/>
      <div id="side_info">
        <SidePanels mode = {mode}/>
      </div>
    </div>
    </>)
}

export default MyInfo