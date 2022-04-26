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
                        <li><a href="https://maverickcavazos.github.io/COVID-Tracker/" src={Internet}><i class="fa fa-internet"></i></a></li>
                        <li><a href="https://github.com/MaverickCavazos/COVID-Tracker"  src={Github}><i class="fa fa-github"></i></a></li>
                    </ul>
                </div>

                <div class="card-project">
                    <p class="card__name">Coding-Buddy</p>
                    <div class="grid-container">
                         <div class="grid-child-posts">hi</div>
                    </div>
                    <ul class="social-icons">
                        <li><a href="https://coding-bud.herokuapp.com/" src={Internet}><i class="fa fa-internet"></i></a></li>
                        <li><a href="https://github.com/MaverickCavazos/Coding-buddy" src={Github}><i class="fa fa-github"></i></a></li>
                    </ul>
                </div>

                <div class="card-project">
                    <p class="card__name">Personal-Chef</p>
                    <div class="grid-container">
                        <div class="grid-child-posts">hi</div>
                    </div>
                    <ul class="social-icons">
                        <li><a href="https://guarded-headland-93069.herokuapp.com/" src={Internet}><i class="fa fa-internet"></i></a></li>
                        <li><a href="https://github.com/MaverickCavazos/personal-chef" src={Github}><i class="fa fa-github"></i></a></li>
                    </ul>
                </div>

                <div class="card-project">
                    <p class="card__name">Tech-Blog</p>
                    <div class="grid-container">
                        <div class="grid-child-posts">hi</div>
                    </div>
                    <ul class="social-icons">
                        <li><a href="https://github.com/MaverickCavazos/tech-blog" src={Github}><i class="fa-github"></i></a></li>
                    </ul>
                </div>

            </div>
        </header>
    );
}

export default Portfolio;