import React from 'react';
import ProfilePic from '../images/profilepic.png';



function About() {
    return (
        <header className="section-header" >
            <h2 className="section-h2">About Me</h2>
            <div className='flex-container'>
                    <img className="profile-pic" src={ProfilePic} alt="Pic of Me" />
                <p className="about-info">
                    Thank you for visiting my portfolio! I hope you enjoy your stay. This website built using react,
                    as well as everything else you will find either in the portfolio section or by visiting my github link down below <br />
                    represents a culmination of hardwork and sleepless nights over the couse of many months.
                    <br />
                    <br />
                    This journey started as early as my first ear of ollege. I always wanted to be able to create and do something that helps people. So I enrolled into the University of Texas at San Antonio as a Comp Science Major. <br />
                    Only to later switch to psychology having thought that becoming a therapist was something I would instead want to do to fulfill these goals of helping people. I graduate with a bachelors in psychology and went on to graduate school <br />
                    were I studied to get a master in clinical mental health counseling. The further I got into it the more I thought about what could have been if I stuck with the computer science route. So eventually I decided to take a leap which lead <br />
                    me to enroll in a software-developer boot-camp at the University of Texas at Austin. Were I am currently studing to fulfill a dream to create, inspire, and help people around the world!
                </p>
            </div>
        </header>
    );
}

export default About;