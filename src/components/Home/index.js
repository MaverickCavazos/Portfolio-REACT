import React from 'react';
import ProfilePic from '../images/profilepic.png';

function Home() {
    return (
        <header className="home-container">
            <div className='home-info-container'>

                <div className=''>
                    <h2 className=" ">Hello, my name is</h2>
                    <h1 className=' '>Mavierick Cavazos</h1>
                    <p>
                        Thank you for visiting, I hope you enjoy your stay. This website was built using REACT. <br />
                        You will also find other projects in my Portfolio section using a variety of other technologies<br />
                        including, but not limited to; Node.js, Express.js, handlebars, Sequelize, and Javascript. <br />
                        <br />
                        All of my other work will be viewable by visiting my github link below. <br />
                        If you have any other questions, please dont hesistate to reach out to me!
                    </p>
                </div>

                <div className='pic-container'>
                    <img className="profile-pic" src={ProfilePic} alt="Pic of Me" />

                </div>

            </div>
        </header>
    );
}









export default Home;