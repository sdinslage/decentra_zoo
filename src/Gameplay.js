import React from 'react';
import './Gameplay.css';
import Decentra_zoo_Screenshot_1 from './imgs/Decentra_zoo_Screenshot_1.jpg';
import Decentra_zoo_Screenshot_2 from './imgs/Decentra_zoo_Screenshot_2.jpg';
import Decentra_zoo_Screenshot_3 from './imgs/Decentra_zoo_Screenshot_3.jpg';
import Building_screenshot from './imgs/Building_in_decentrazoo.jpg';
import explore_screenshot from './imgs/Decentra_zoo_oregon_zoo.jpg';
import publishing_screenshot from './imgs/Publishing_on_decentra_zoo.jpg';

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
        
            <br></br>
            <h2>Mechanics of DecentraZoo</h2>
            <div className="gameplay-mechanics">
                <h3>Starting the Game</h3>
                <p>Upon starting the game, you will be taken into the zoo metaverse where you will be able to freely roam around and travel to any zoo that is established within the world.</p>
                <img src={explore_screenshot} width={600} height={300}/> 

                <h3>Building</h3>
                <p>Every new player of DecentraZoo is given 200DZ to start out with. You can build whatever you want to your heart's desire, but you should try and build something that will
                attract many vistors. The more visitors that come to your zoo, the more DZ you will earn. DecentraZoo provides hundreds of items and animals to get your building process
                started. Custom made items and hybrid animals can be bought on the DecentraZoo Marketplace. If you ever run low on DZ, you can earn more by visiting other zoos and writing a review.
                Alternatively, you can sell items, that you customly made, or hybrid animals on the DecentraZoo Marketplace to earn DZ.
                </p>
                <img src={Building_screenshot} width={600} height={300}/>  

                <h3>Publishing Your Zoo</h3>
                <p>After you have finished building your zoo, you are free to publish it to the zoo metaverse for all to see. You will pick an unoccupied coordinate where your zoo will be
                established. Once your zoo has been established, anyone will be able to visit your zoo and to leave a review. If you want to make a modification to your zoo, you are welcome to do so at anytime.
                </p>
                <img src={publishing_screenshot}  width={600} height={500}/>             
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
