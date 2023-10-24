import React from 'react';
import './About.css';

function About() {
    return (
        <div className="page-layout">
            <h1 className='heading'>About DecentraZoo</h1>
            <p className='subhead'>
                DecentraZoo is an innovative gaming experience that combines the thrill of virtual zoos with the power of blockchain technology. Dive into a world where every creature, landscape, and item is truly owned by you, thanks to the decentralization offered by blockchain. 
            </p>

            <p className='subhead'>
                Our vision is to redefine gaming by giving players full ownership of their in-game assets. This isn't just a game; it's a revolution. By incorporating blockchain, we're not only providing a fun and engaging experience but also introducing gamers to the future of digital ownership.
            </p>

            <h2>Features:</h2>
            <ul>
                <li>Unique virtual animals with proof of ownership on the blockchain.</li>
                <li>Trade, sell, or showcase your assets in a bustling virtual marketplace.</li>
                <li>Engaging gameplay mechanics that are enhanced by blockchain benefits.</li>
            </ul>

            <p className='subhead'>
                Join us in this adventure and be a part of the next big thing in gaming!
            </p>
        </div>
    );
}

export default About;
