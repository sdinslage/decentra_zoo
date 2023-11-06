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
                <p className='inspir-details'>
                Our dream for DecentraZoo began with a simple question: What if we could capture the essence of 
                managing a vibrant zoo and combine it with the thrill of a blockchain-powered universe? 
                We found our answer by combining the charm of Planet Zoo's lifelike simulations with the Blockchain aspects 
                of CryptoZoo (See more about CryptoZoo below). This game is our love letter to both zoo enthusiasts and crypto adventurers. 
                Imagine planting every tree and placing every bench with care, knowing that each choice contributes 
                to a living world that's uniquely yours, yet interconnected with a community of dreamers and builders. 
                We didn't just build a game; we crafted a space where passion for wildlife conservation meets the 
                excitement of cryptocurrency, creating a shared adventure where every player's contribution is as real 
                and valued as the digital animals they nurture.
                </p>

            </section>

            <section className='crypto-zoo'>
                <h1 className='cz-head'>Crytpo Zoo</h1>
                <p className='cz-details'>
                We are aware of the reputation of CryptoZoo and the poor image it set for Blockchain gaming as 
                a whole. We are not here to fix CrytpoZoo in any way, shape, or form. Due to the mismanagement and scam like 
                nature of its development, it is a project far beyond saving. Our goal for DecentraZoo is to take what 
                was promised of CryptoZoo, and make it a reality. We are developing this project in an attempt to 
                build up the shattered reputation of Blockchain gaming that CryptoZoo left us. We know it will not be 
                an easy journey, but we hope you will stick with us so that we can create something truly great and fun 
                for everyone.
                </p>
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
