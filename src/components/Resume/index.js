import React from 'react';
import Myresume from '../images/Resume.pdf'

function Resume() {
    return (
        <header className="section-header" >
            <h2 className="section-h2">Resume</h2>
            <p className='Resume-info'>
                Below is a snapshot of my work history, proficiencies, and education. If you would like to download a copy click the button!
            </p>
           
      <iframe className="resume"src="https://drive.google.com/file/d/1-ZegopvruWZmehaEpN_t3XeD2MAwTG4_/preview" width="900" height="600" allow="autoplay"></iframe>
      <form  method="get" action={Myresume}>
         <button className="resume-button" type="submit">Download Resume</button>
      </form>
        </header>
    );
}

export default Resume;