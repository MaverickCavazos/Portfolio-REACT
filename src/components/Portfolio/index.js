import React from 'react';
import Github from '../images/github.png';
import Internet from '../images/internet.png';


function Portfolio() {
    return (
        <header>
            <h2 className="section-h2">Projects</h2>
            
            <div class="container-projects">

                <div class="card-project">
                    <p class="card__name">Covid-Tracker</p>
                    <div class="grid-container">
                        <div class="grid-child-posts">hi</div>
                    </div>
                    <ul class="social-icons">
                        <li><a href="https://maverickcavazos.github.io/COVID-Tracker/"><img src={Internet} width="30" height="30" class="fa fa-internet"></img></a></li>
                        <li><a href="https://github.com/MaverickCavazos/COVID-Tracker" ><img src={Github} width="32" height="32" class="fa fa-github"></img></a></li>
                    </ul>
                </div>

                <div class="card-project">
                    <p class="card__name">Coding-Buddy</p>
                    <div class="grid-container">
                         <div class="grid-child-posts">hi</div>
                    </div>
                    <ul class="social-icons">
                        <li><a href="https://coding-bud.herokuapp.com/"><img src={Internet} width="30" height="30" class="fa fa-internet"></img></a></li>
                        <li><a href="https://github.com/MaverickCavazos/Coding-buddy"><img src={Github} width="32" height="32" class="fa fa-github"></img></a></li>
                    </ul>
                </div>

                <div class="card-project">
                    <p class="card__name">Personal-Chef</p>
                    <div class="grid-container">
                        <div class="grid-child-posts">hi</div>
                    </div>
                    <ul class="social-icons">
                        <li><a href="https://guarded-headland-93069.herokuapp.com/"><img src={Internet} width="30" height="30" class="fa fa-internet"></img></a></li>
                        <li><a href="https://github.com/MaverickCavazos/personal-chef"><img src={Github} width="32" height="32" class="fa fa-github"></img></a></li>
                    </ul>
                </div>

                <div class="card-project">
                    <p class="card__name">Tech-Blog</p>
                    <div class="grid-container">
                        <div class="grid-child-posts">hi</div>
                    </div>
                    <ul class="social-icons">
                        <li><a href="https://github.com/MaverickCavazos/tech-blog"><img src={Github} width="32" height="32" class="tech-github"></img></a></li>
                    </ul>
                </div>

                <div class="card-project">
                    <p class="card__name">Express.js-Note-Taker</p>
                    <div class="grid-container">
                        <div class="grid-child-posts">hi</div>
                    </div>
                    <ul class="social-icons">
                        <li><a href="https://github.com/MaverickCavazos/express-challenge"><img src={Github} width="32" height="32" class="tech-github"></img></a></li>
                    </ul>
                </div>

                <div class="card-project">
                    <p class="card__name">SQL-Employee-Tracker</p>
                    <div class="grid-container">
                        <div class="grid-child-posts">hi</div>
                    </div>
                    <ul class="social-icons">
                        <li><a href="https://github.com/MaverickCavazos/Employee-tracker"><img src={Github} width="32" height="32" class="tech-github"></img></a></li>
                    </ul>
                </div>

            </div>
        </header>
    );
}

export default Portfolio;