import React from 'react';
import Github from '../images/github.png';
import Internet from '../images/internet.png';

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";



export default class extends React.Component {
    render() {
        return (
            <header>
                <h2 className="section-h2">Projects</h2>

                <CarouselProvider
                    naturalSlideWidth={500}
                    naturalSlideHeight={500}
                    totalSlides={11}
                >

                    <div className="container-projects">
                        <Slider>
                        <Slide index={0}>
                                <div className="card-project">
                                    <p className="card__name">MERN Book Search</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">This is a google book-search application that allows the user to create a account and save books for future viewing. 
                                        Book Search is full stack MERN application that utilize GraphQL and Apollo.</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://github.com/MaverickCavazos/MERN-Book-search"><img src={Github} width="32" height="32" className="tech-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                        <Slide index={1}>
                                <div className="card-project">
                                    <p className="card__name">Tech-Blog</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">Tech-blog is a full-stack project which I built the back-end utilizing mySQL, Express.js, Node.js, and Sequlize (A TypeScript and Node ORM). Tech-blog is a website which displays the latest news and updates on tech. Click the github icon to access the README which details how to run the application so you can make a account and get to blogging!</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://github.com/MaverickCavazos/tech-blog"><img src={Github} width="32" height="32" className="tech-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="card-project">
                                    <p className="card__name">SQL-Employee-Tracker</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">SQL-Employee-Track is a fully-backend application which runs off of your CLI. This utilizes inquirer (a command line interface) to lead you through prompts that will ask you specific questions about employees and then store the inputs into a database using SQL, helping you keep track of the companies employees!</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://github.com/MaverickCavazos/Employee-tracker"><img src={Github} width="32" height="32" className="tech-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={3}>
                                <div className="card-project">
                                    <p className="card__name">Jokes App</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">This is a simple full stack Jokes Application using SQL, .Net, and C#. It allows the user to create a account
                                        search, create, and view jokes created by other users.</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://github.com/MaverickCavazos/DotNet-JokesApp"><img src={Github} width="32" height="32" className="tech-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={4}>
                                <div className="card-project">
                                    <p className="card__name">Web Scrapper</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">Currently ran strictly through the terminal, this application allows you to plug in a url, target specific 
                                        CSS classes/id or HTML tags and get all of the information assocaited with each one. Its done by utilizing npm packages like axios, express, and cheerio. To test out this 
                                        application, plug in the URL you want to get information from, find the classes or html tag assocaited with the information you want to get from the webpage,
                                        and then run npm start.</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://github.com/MaverickCavazos/Web-Scrapper"><img src={Github} width="32" height="32" className="tech-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={5}>
                                <div className="card-project">
                                    <p className="card__name">Frog-Jumper</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">A browser game called Frog-Jumper, the end goal will be to eat as many flys as you can while jumping from 
                                        lily page to lily pad, on what similates a tredmill of lilypads. Although a work in progress, this application uses vanilla JavaScript, html, and CSS. Currently,
                                        the initial position for the frog and background have been set, the frog has jumping/moving functionality, and the lily pads dynamically generate.</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://github.com/MaverickCavazos/Frog-Jumper"><img src={Github} width="32" height="32" className="tech-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={6}>
                                <div className="card-project">
                                    <p className="card__name">Express.js-Note-Taker</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">Note-Taker utilizes Express.js, Node.js, and uuidv4 to create and simple note taking app which you can also visit later to view as the notes pesist.</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://github.com/MaverickCavazos/express-challenge"><img src={Github} width="32" height="32" className="tech-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={7}>

                                <div className="card-project">
                                    <p className="card__name">Coding-Buddy</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">My first full stack project which utilizes mySQL, Express.js, Node.js, Bulma CSS framework, and Handlebars for the front-end. This application was indeed to help facilitate collaboration amoung beginner, intermidiate, and advnaced level programers.</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://coding-bud.herokuapp.com/"><img src={Internet} width="30" height="30" className="fa fa-internet"></img></a></li>
                                        <li><a href="https://github.com/MaverickCavazos/Coding-buddy"><img src={Github} width="32" height="32" className="fa fa-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={8}>
                                <div className="card-project">
                                    <p className="card__name">Covid-Tracker</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">One of my first projects, this is a front-end application which shows covid data and rates around the globe using two apis that show real time data, death rate, and recovery rate.</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://maverickcavazos.github.io/COVID-Tracker/"><img src={Internet} width="30" height="30" className="fa fa-internet"></img></a></li>
                                        <li><a href="https://github.com/MaverickCavazos/COVID-Tracker" ><img src={Github} width="32" height="32" className="fa fa-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={9}>
                                <div className="card-project">
                                    <p className="card__name">Art-Gallery</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">This project was made from a figma design file following specifications for screen sizes of 1440px, 768px, and 350px. The goal was to make it as close to pixel perfect as possible given the speicfications.</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://maverickcavazos.github.io/FactoryPure-Art-Gallery/"><img src={Internet} width="30" height="30" className="fa fa-internet"></img></a></li>
                                        <li><a href="https://github.com/MaverickCavazos/FactoryPure-Art-Gallery" ><img src={Github} width="32" height="32" className="fa fa-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={10}>
                                <div className="card-project">
                                    <p className="card__name">Personal-Chef</p>
                                    <div className="grid-container">
                                        <div className="grid-child-posts">This project was built using the MERN stack (MongoDB, Express, REACT, and Node). This was my first experinece with a real-client which I was lucky enough to collaborate with 3 other amazing developers to create this web-page to help a local personal-chef display her work and attrach new business!</div>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a href="https://guarded-headland-93069.herokuapp.com/"><img src={Internet} width="30" height="30" className="fa fa-internet"></img></a></li>
                                        <li><a href="https://github.com/MaverickCavazos/personal-chef"><img src={Github} width="32" height="32" className="fa fa-github"></img></a></li>
                                    </ul>
                                </div>
                            </Slide>
                          
                            

                        </Slider>
                    </div>
                    <div className="carousel-buttons">
                        <ButtonBack className='back-carousel-button'>Back</ButtonBack>
                        <ButtonNext className='next-carousel-button'>Next</ButtonNext>
                    </div>
                </CarouselProvider>

            </header>
        );
    }
}