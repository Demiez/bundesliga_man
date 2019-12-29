import React from 'react';
import { Link } from 'react-router-dom';
import image01 from '../../assets/images/image01.jpg';
import '../../assets/styles/homePage.scss';

const HomePage = () => (
    <div className="jumbotron">
        <h1>BundesLiga Manager</h1>
        <p>Manage information about BundesLiga, Teams, Players and Current Standings</p>
        <img src={image01} alt="bundes champion" />
        <Link to="basicinfo" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;