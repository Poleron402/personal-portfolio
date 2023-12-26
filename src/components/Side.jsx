export const SidePanels=({mode}) =>{
return(
    <>
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
        </>
)
}