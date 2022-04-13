import React from 'react';
import ProfilePic from '../images/profilepic.png';



function About() {
    return (
        <header className="section-header" >
            <h2 className="section-h2">About Me</h2>
            <div className='flex-container'>
                    <img className="profile-pic" src={ProfilePic} alt="Pic of Me" />
                <p className="about-info">
                    This journey started as early as my first year of college. I always wanted to be able to create and do something that helps people. So I enrolled into the University of Texas at San Antonio as a Comp Science Major. <br />
                    Only to later switch to psychology having thought that becoming a therapist was something I would instead want to do to fulfill these goals of helping people. I graduate with a bachelors in psychology and went on to <br />
                    graduate school where I studied to get a master in clinical mental health counseling. The further I got into it the more I thought about what could have been if I stuck with the computer science route. So eventually <br /> 
                    I decided to take a leap which lead me to enroll in a software-developer boot-camp at the University of Texas at Austin. Where I am currently studying to fulfill a dream to create, inspire, and help people around the world!

                </p>
            </div>
        </header>
    );
}

export default About;