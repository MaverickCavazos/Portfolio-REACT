import React from 'react';
import ProfilePic from '../images/profilepic.png';
import WebPic from '../images/web-pic.jpg';

function Home() { 
    return (
        <header className="home-page-container">
            <div className='flex-container-home'>

                <div className='about-info'>
                    <h2 className="hello">Hello, my name is</h2>
                    <h1 className='name'>Maverick Cavazos</h1>
                    <p className='home-about'>
                        Thank you for visiting, I hope you enjoy your stay. This website was built using REACT. 
                        You will also find other projects in my Portfolio section using a variety of other technologies
                        including, but not limited to; Node.js, Express.js, handlebars, Sequelize, and Javascript. 
                        <br/>
                        <br/>
                        All of my other work will be viewable by visiting my github link below. 
                        If you have any other questions, please dont hesistate to reach out to me!
                    </p>
                </div>

                <div className='pic-container'>
                    <img className="profile-pic" src={WebPic} alt="Pic of Me" />

                </div>

            </div>
        </header>
    );
}









export default Home;