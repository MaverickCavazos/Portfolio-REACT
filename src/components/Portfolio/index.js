import React from 'react';

function Portfolio() {
    return (
        <header className="section-header">
            <h2 className="section-h2">Projects</h2>
            <form action="https://maverickcavazos.github.io/COVID-Tracker/">
                <input className="covid-button" type="submit" value="Covid-tracker" />
            </form>
            <form action="https://coding-bud.herokuapp.com/">
                <input className="coding-button" type="submit" value="Coding-Buddy" />
            </form>
        </header>
    );
}

export default Portfolio;