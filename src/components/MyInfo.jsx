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
            <p>I am a Junior Software Developer with a passion in full-stack and mobile development. I am currently a student at California State University, Monterey Bay, graduating August 2025. I am eager to secure an internship where I can contribute to a motivated team. With a foundation in Python, Java, and JavaScript, along with hands-on experience in full-stack development, I am looking for an opportunity to apply and enhance my knowledge in a real-world setting.
            </p>
            <h4>My Experience</h4>
            <p>I learned to develop full-stack applications during my intership at Code Platoon, a coding bootcamp that serves veterans and military spouses. 
              I worked as a Teacher's Assistant, and was responsible for a group of 5 people, ensuring their sucessful completion of assignments and tracking their progress in the bootcamp. 
              In addition I had to learn and adapt to the material fast in order to be a resourceful TA. 

            <br></br>
            </p>
            <h4>Recent school project video (<a href="https://github.com/Poleron402/sb" target="_blank" className={mode?"link":"link_dark"}>ChillJava GitHub</a>)</h4>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/Oz_JlrlvsZA"></iframe>
            <p><b>What I did:</b> This project incorporated the use of RoomDB in Android Studio. I learned how to manipulate database using Data Access Object (DAO), how to use intent, and a little bit of shared preferences.<br>
            </br><b style={{color: "#FF0000"}}>What I want to do:</b> This was a a school project and we where demonstrated how to run everything on the main thread, which caused issues for the UI in the long run. I had to look up how to run it differently without complete understanding how the process works. My future plans for this project is to refactor it to not run most database processes on the main thread.</p>
            <h4>Recent full-stack project (<a href="https://github.com/Poleron402/Chudovo" target="_blank" className={mode?"link":"link_dark"}>Chudovo GitHub</a>)</h4>
            
        </div>
      </div>
      <div id="side_info">
        <div id={mode?"people":"people_dark"}>
          <p>Tech:
            <br></br>
            <u>Languages and frameworks:</u> <br></br>
            Python, JavaScript, Java, Django, React, Postgresql, RESTfulAPI, Room DB, Android Development, Agile
            <br></br>
            <u>Version Control:</u> Git, GitHub
            <br></br>
            <u>IDEs:</u> Visual Studio Code, Sublime Text, Android Studio, Eclipse, IntelliJ IDEA
          </p>
          
        </div>
        <div id={mode?"people":"people_dark"}>
          <u>Soft Skills:</u> <br></br>
          Leadership, adaptability, fast-learning, team-work oriented.
        </div>
        
      </div>
    </div>
    </>)
}

export default MyInfo