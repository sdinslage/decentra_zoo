import React from 'react';
import $ from 'jquery';
import './Gameplay.css';
import Decentra_zoo_Screenshot_1 from './imgs/Decentra_zoo_Screenshot_1.jpg';
import Decentra_zoo_Screenshot_2 from './imgs/Decentra_zoo_Screenshot_2.jpg';
import Decentra_zoo_Screenshot_3 from './imgs/Decentra_zoo_Screenshot_3.jpg';
import Building_screenshot from './imgs/Building_in_decentrazoo.jpg';
import explore_screenshot from './imgs/Decentra_zoo_oregon_zoo.jpg';
import publishing_screenshot from './imgs/Publishing_on_decentra_zoo.jpg';
import capybaras from './imgs/Decentra_zoo_capybaras.png';
import ostriches from './imgs/ostriches.png';
import panda_elephant_exhibit from './imgs/panda_elephant_exhibit.jpg';
import dancing_minigame from './imgs/Decentra_zoo_dancing_minigame.jpg';
import marketplace from './imgs/Decentra_zoo_marketplace.jpg';

function Gameplay() {
    return (
        <div>
            <section className='gp-title-card'>
                <h1 className='heading'>DecentraZoo Gameplay</h1>
                <p className='subhead'>Welcome to the Gameplay section of DecentraZoo! Experience a blend of strategy, 
                fun, and the thrill of blockchain dynamics as you manage and grow your virtual zoo.</p>
            </section>

            {/* Images Section */}
            <div id="gameplay-images">
                
                <div className = "slide-image" id="image1"><img src={Decentra_zoo_Screenshot_1} width={500} height={250} alt='Screenshot-1'/></div>
                <div className = "slide-image" id="image3"><img src={panda_elephant_exhibit} width={500} height={250} alt='Screenshot-3'/></div>
                <div className = "slide-image" id="image2"><img src={Decentra_zoo_Screenshot_2} width={500} height={250} alt='Screenshot-2'/></div>
                <div className = "slide-image" id="image3"><img src={Decentra_zoo_Screenshot_3} width={500} height={250} alt='Screenshot-3'/></div>
                <div className = "slide-image" id="image4"><img src={capybaras} width ={500} height={250} alt='Capybaras'/></div>
                <div className = "slide-image" id="image3"><img src={ostriches} width={500} height={250} alt='Screenshot-3'/></div>
            </div>
        
            <br></br>
            {/* How to Play Section */}
            <section className='how-to-section'>
                <div className="how-to-section-content">
                    <div className='how-to-text'>
                        <h2 className='how-to-head'>How to Play</h2>
                        <h3 className='how-to-subhead'>Starting the Game</h3>
                        <p className='how-to-details'>Upon starting the game, you will be taken into the zoo metaverse where you will be able 
                        to freely roam around and travel to any zoo that is established within the world.</p>
                    </div>
                    <img className='how-to-img' src={explore_screenshot} alt='explore'/>
                </div>

                <div className="how-to-section-content">
                    <div className='how-to-text'>
                        <h4 className='how-to-subhead'>Building</h4>
                        <p className='how-to-details'>Every new player of DecentraZoo is given 200DZ to start out with. You can build whatever you want to your heart's desire, but you should try and build something that will
                        attract many vistors. The more visitors that come to your zoo, the more DZ you will earn. DecentraZoo provides hundreds of items and animals to get your building process
                        started. Custom made items and hybrid animals can be bought on the DecentraZoo Marketplace. If you ever run low on DZ, you can earn more by visiting the DecentraZoo Minigame Parlor and play minigames.
                        Alternatively, you can sell items, that you customly made, or hybrid animals on the DecentraZoo Marketplace to earn DZ.
                        </p>
                    </div>
                    <img className='how-to-img' src={Building_screenshot} alt='Buidling'/>
                </div>  

                <div className="how-to-section-content">
                    <div className='how-to-text'>
                        <h5 className='how-to-subhead'>Publishing Your Zoo</h5>
                        <p className='how-to-details'>After you have finished building your zoo, you are free to publish it to the zoo metaverse for all to see. You will pick an unoccupied coordinate where your zoo will be
                        established. Once your zoo has been established, anyone will be able to visit your zoo and to leave a review. If you want to make a modification to your zoo, you are welcome to do so at anytime.
                        </p>
                    </div>
                    <img className='how-to-img' src={publishing_screenshot} alt='Publish-SS'/>            
                </div>

                <div className="how-to-section-content">
                    <div className='how-to-text'>
                        <h5 className='how-to-subhead'>Minigames</h5>
                        <p className='how-to-details'>If you ever run low on DZ, you can always earn more by stopping by the DecentraZoo Minigame Parlor. Here, you can play minigames with other metaverse users to fill up your pockets.
                        With over 100 minigames to choose from, the fun here will never end!
                        </p>
                    </div>
                    <img className='how-to-img' src={dancing_minigame} alt='Publish-SS'/>            
                </div>

                <div className="how-to-section-content">
                    <div className='how-to-text'>
                        <h5 className='how-to-subhead'>The Marketplace</h5>
                        <p className='how-to-details'>Frequently check out the DecentraZoo marketplace to see items that other users have made and published, as well as some hybrid animals. Think you got something that can earn you a few bucks,
                        go ahead and publish it here on the marketplace.
                        </p>
                    </div>
                    <img className='how-to-img' src={marketplace} alt='Publish-SS'/>            
                </div>
            </section>

            {/* Features Section */}
            <section className='feat-section'>
                <h2 className='feat-head'>Features:</h2>
                <ul>
                    <li>Collect, breed, and trade unique animals.</li>
                    <li>Interact with a dynamic economy based on supply and demand.</li>
                    <li>Participate in global events and challenges.</li>
                    <li>And much more!</li>
                </ul>
                <h2 className='feat-head'>The Use of Soulbound Tokens</h2>
            <p className='soul-content'>Each zoo that is created will be protected by a soulbound token. A soulbound token is a type of NFT that cannot be sold or bought by anyone. It is mainly used in proving ownership
                of certain assets and other traits of a specific individual. In DecentraZoo, soulbound tokens will be used to prove ownership of each zoo that is published to the metaverse. Once a zoo has been published, it cannot be bought or sold off by anyone- Your zoo belongs to you. 
                This will allow each user to have full control over their zoo.
            </p>
            </section>

            {/* Add more sections like videos, screenshots, and gameplay mechanics as needed */}
        </div>
    );
}

$(document).ready(function(){
  
    var interval = window.setInterval(rotateSlides, 3000)
    
    function rotateSlides(){
      var $firstSlide = $('#gameplay-images').find('div:first');
      var width = $firstSlide.width();
      
      $firstSlide.animate({marginLeft: -width}, 1000, function(){
        var $lastSlide = $('#gameplay-images').find('div:last')
        $lastSlide.after($firstSlide);
        $firstSlide.css({marginLeft: 0})
      })
    }
  
  })

export default Gameplay;