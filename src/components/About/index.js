import React from 'react';
import ProfilePic from '../images/profilepic.png';



function About() {
    return (
        <header className="section-header" >
            <h2 className="section-h2">About Me</h2>
            <section className='flex-container'>
               
                <p className="about-me-info">
                    Hello! My name is Maverick and I'm passionate about solving problems through the use of software. 
                    I graduated with a Bachelor's in Psychology with the intention of becoming a therapist, but I had 
                     always been drawn to technology and interested in making a career out of it.
                    
                     After realizing this, I decided to take the leap and enroll into a software developer bootcamp at the
                     University of Texas at Austin where I am currently studying to fulfill my dream to create, inspire, 
                     and help people around the world. My journey into this field was anything but linear, but my passion 
                     for helping others combined with my love of technology brought me to where I am today.<br/>
                    
                    My portfolio you're currently viewing, along with my listed projects, display some of the skills 
                    I've developed throughout my Full-stack Bootcamp. Here are the highlights:</p>

                    <div className='skills'>
                    <img width="350" src="https://github-readme-stats.vercel.app/api/top-langs/?username=MaverickCavazos&theme=tokyonight" />
                    </div>
                
            </section>
        </header>
    );
}

export default About;