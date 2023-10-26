import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import temp from './imgs/temp.webp';

function Home() {
    return (
        <div>
            <section className='title'>
                <h1 className='heading'>DecentraZoo</h1>
                <p className='subhead'>Build, Trade, Explore: The Blockchain Zoo Awaits!</p>
            </section>
            
            {/* About Section */}
            <section className="about-section">
                <h2>About DecentraZoo</h2>
                <p>DecentraZoo is a blockchain based strategy game where you can buy land and build a zoo with different and unique animals. You can create exhibits, buy and trade animals, visit other players Zoo's, and much more.</p>
                <nav className='learn-more'>
                <Link to="/about">Click Here to Learn More</Link>
                </nav>
            </section>

            {/*Tag Line Section*/}
            <section className="tag-section">
                <h2 className='tag-head'>Build</h2>
                <p className='tag-details'>DecentraZoo offers a in depth creation kit that allows you to create your Zoo with no limitations. Decorate your Zoo with a wide variety of items from the shop to create your very own
                virtual decentrasized Zoo.</p>

                <h3 className='tag-head'>Trade</h3>
                <p className='tag-details'>Trade, Sell, or Buy items and animals on the DecentraZoo Marketplace. The Marketplace offers hundreds of unique items that you can use to decorate and expand upon your Zoo.
                The Marketplace utilizes Ethereum smart contracts to ensure a safe and secure transaction process.</p>

                <h4 className='tag-head'>Explore</h4>
                <p className='tag-details'>What fun is a Zoo if no one can see it? DecentraZoo is a fully decentralized metaverse where land and items are owned by its users. Visit other players Zoo's and explore everything DecentraZoo has to offer!</p>
                
            </section>

            {/* Meet the Team Section */}
            <section className="team-section">
                <h5>Meet the Team</h5>
                <div className="member">
                    <img className='member-img' src={temp} alt="Seth" />
                    <p><strong>Seth (Team Lead)</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                <div className="member">
                    <img className='member-img' src={temp} alt="Matthew" />
                    <p><strong>Matthew (UI Designer)</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="member">
                    <img className='member-img' src={temp} alt="Jayden" />
                    <p><strong>Jayden (UX Design)</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
