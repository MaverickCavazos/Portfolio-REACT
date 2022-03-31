import React from 'react';

function Resume() {
    return (
        <header className="section-header" >
            <h2 className="section-h2">Resume</h2>
            <p>
                Below is a snapshot of my work history, proficiencies, and education. If you would like to download a copy click the button!
            </p>
            <form method="get" action="M. Cavazos - Resume (2).pdf">
         <button className="resume-button" type="submit">Download Resume</button>
      </form>
      <iframe className="resume"src="https://drive.google.com/file/d/1HDGg7ysFBp_t9JgUEdcOU1im6jmhsZtB/preview" width="900" height="600" allow="autoplay"></iframe>
        </header>
    );
}

export default Resume;