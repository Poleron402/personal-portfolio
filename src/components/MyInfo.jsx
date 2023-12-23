function MyInfo({mode}){
    return (<>
    <div id="main">
      <div id={mode?"my_info":"my_info_dark"}>
        <div id="cover_photo"></div>
        <div id="profile_photo"><img id="avatar" src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720"></img></div>
        <div id="about">
            <h3 id="myname">Polina Mejia</h3>
            <hr></hr>
            <h4>Hello 👋</h4>
            <p>I am a Junior Software Engineer with a passion in full-stack and mobile development. I am currently a student at California State University, Monterey Bay and I have an experience wirking as a Teachers 
              Assistant at a coding bootcamp Code Platoon.
            </p>
            <h4>My Experience</h4>
            <p>I learned to develop front-end, back-end, and full-stack applications during my intership at Code Platoon, a coding bootcamp that serves military personnel and military spouses. I worked as a Teacher's Assistant, and my main purpose was 
              assisting students in their assignments, which meant I had to learn and adapt to the material fast in order to be a resourceful TA. 
            <br></br>
            </p>
        </div>
      </div>
      <div id="side_info">
        <div id={mode?"people":"people_dark"}>
          <p>Tech:
            <br></br>
            Languages and frameworks: <br></br>
            Python, JavaScript, Java, Django, React, Postgresql, RESTfulAPI, Room DB, Android Development, Agile
            <br></br>
            Version Control: Git, GitHub
            <br></br>
            IDEs: Visual Studio Code, Sublime Text, Android Studio, Eclipse, IntelliJ IDEA
          </p>
        </div>
        <div id={mode?"people":"people_dark"}>
          Soft Skills: <br></br>
          Leadership, adaptability, fast-learning.
        </div>
      </div>
    </div>
    </>)
}

export default MyInfo