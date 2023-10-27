import React from 'react';
import './Gameplay.css';
import Decentra_zoo_Screenshot_1 from './imgs/Decentra_zoo_Screenshot_1.jpg';
import Decentra_zoo_Screenshot_2 from './imgs/Decentra_zoo_Screenshot_2.jpg';
import Decentra_zoo_Screenshot_3 from './imgs/Decentra_zoo_Screenshot_3.jpg';

function Gameplay() {
    return (
        <div className="gameplay-page">
            <h1>DecentraZoo Gameplay</h1>
            <p>Welcome to the Gameplay section of DecentraZoo! Experience a blend of strategy, fun, and the thrill of blockchain dynamics as you manage and grow your virtual zoo.</p>

            <div className="gameplay-images">
                <img src={Decentra_zoo_Screenshot_1} width={500} height={300}/>
                <img src={Decentra_zoo_Screenshot_2} width={600} height={300}/>
                <img src={Decentra_zoo_Screenshot_3} width={600} height={300}/>
            </div>
            <h2>Features:</h2>
            <ul>
                <li>Collect, breed, and trade unique animals.</li>
                <li>Interact with a dynamic economy based on supply and demand.</li>
                <li>Participate in global events and challenges.</li>
                <li>And much more!</li>
            </ul>
            <h2>The Use of Soulbound Tokens</h2>
            <p>Each zoo that each user creates is protected by a soulbound token. A soulbound token rightly proves ownership of an asset to a certain individual. These soulbound tokens will 
                prevent content from being copied or sold off to other users.
            </p>
            {/* Add more sections like videos, screenshots, and gameplay mechanics as needed */}
        </div>
    );
}

export default Gameplay;
