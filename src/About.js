import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <section className='about-start'>
                <h1 className='heading'>About DecentraZoo</h1>
                <div className='about-subhead-layout'>
                    <p>Welcome to the about page. Here you can find more details about the games
                    mechanics and features. If you are looking for screenshots and gameplay of the game
                    <Link className='game-link' to="/gameplay"> Click Here.</Link> </p>
                </div>
            </section>

            <section className='inspir-section'>
                <h1 className='inspir-head'>Inspriation</h1>

            </section>

            <section className='crypto-zoo'>
                <h1 className='cz-head'>Crytpo Zoo</h1>

            </section>

            <section className='basics'>
                <h1 className='basics-head'>The Basics</h1>
                <p className='basics-details'>
                    DecentraZoo is an innovative gaming experience that combines the thrill of virtual zoos with the power of blockchain
                    technology. Dive into a world where every creature, landscape, and item is truly owned by you, thanks to the 
                    decentralization offered by blockchain. 
                </p>
                <h2 className='basics-head'>The Vision</h2>
                <p className='basics-details-2'>
                    Our vision is to create a game where players will be able to take their dream Zoo, and make it into 
                    a (virtual) reality. By utilizing the latest blockchain technology's, we are aiming to create 
                    a world completely controlled by the players. 
                </p>
            </section>

            <p className='about-end'>
                Join us in this adventure and be a part of the next big thing in gaming!
            </p>
        </div>
    );
}

export default About;
