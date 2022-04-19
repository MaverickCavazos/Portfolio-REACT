import React from 'react';
import ProfilePic from '../images/profilepic.png';



function About() {
    return (
        <header className="section-header" >
            <h2 className="section-h2">About Me</h2>
            <section className='flex-container'>
                <img className="profile-pic" src={ProfilePic} alt="Pic of Me" />
                <p className="about-info">
                    Hello! My name is Maverick and I'm passionate about solving problems through the use of software. <br/>
                    I graduated with a Bachelor's in Psychology with the intention of becoming a therapist, but I had <br/>
                     always been drawn to technology and interested in making a career out of it.<br/>
                     <br/>
                     After realizing this, I decided to take the leap and enroll into a software developer bootcamp at the
                    <br/> University of Texas at Austin where I am currently studying to fulfill my dream to create, inspire, <br/>
                     and help people around the world. My journey into this field was anything but linear, but my passion <br/>
                     for helping others combined with my love of technology brought me to where I am today.<br/>
                    <br/>
                    <p>My portfolio you're currently viewing, along with my listed projects, display some of the skills <br/> 
                    I've developed throughout my Full-stack Bootcamp. Here are the highlights:</p>
                    <div className='skills'>
                        <ul className='skills-one'>
                            <li className='single-skill'>
                                Javascript
                            </li>
                            <li className='single-skill'>
                                MERN Stack
                            </li>
                            <li className='single-skill'>
                                React
                            </li>
                        </ul>
                        <ul className='skills-two'>
                            <li className='single-skill'>
                                Node.js
                            </li>
                            <li className='single-skill'>
                                SQL
                            </li>
                            <li className='single-skill'>
                                Sequalize
                            </li>
                        </ul>
                    </div>
                </p>
            </section>
        </header>
    );
}

export default About;