import React from 'react';
import '../styles/App.css';
import logo from '../images/logo_for_menu.jpg';
import {  useNavigate } from 'react-router-dom';





const Home = () => {
     const navigate = useNavigate();

    const handleMenu = () => {
        navigate('/menu');
    }

    return (
        <div id='home'>
        <div className='container'>
            <div className="home">
            <img src={logo} alt="logo" />
            <h1>КАФЕ ШАШLЫК HOUSE </h1>
            <div className="buttons">
            <button onClick={ handleMenu}> MENU</button>
            <button>
                <a href=" https://www.instagram.com/shashlyk.house.krg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                INSTAGRAM
                </a>

                </button>

            <button>

                <a href="https://2gis.kz/karaganda/firm/70000001065452752/tab/reviews?m=73.122144%2C49.791154%2F16 ">
                2GIS
                </a>
                </button>
            </div>
            <span className='policy'>© A fully responsive menu designed by: <a className="privacy" href='https://t.me/saparbekovvw'> saparbekovvw</a>

            </span>
            </div>
            
        </div>
        </div>
    );
};

export default Home;

 