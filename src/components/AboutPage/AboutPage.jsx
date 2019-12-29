import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
    <div className="jumbotron">
        <h1>About</h1>
        <p>This web application is focused on managing information about BundesLiga, Teams, Players and Current Standings</p>
        <p>Created by Dmytro Petrenko</p>
        <p>Basic functionality includes: </p>
        <p>* basic information about BundesLiga</p>
        <Link to="basicinfo" className="btn btn-secondary">
            click
        </Link>
        <p>* manager panel with onClick possibility to get info about each team</p>
        <Link to="managerpanel" className="btn btn-secondary">
            click
        </Link>
    </div>
);

export default AboutPage;