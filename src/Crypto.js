import React from 'react';
import './Crypto.css';
import Coin_graph from './imgs/Coin_graph.png';
import Currency_logo from './imgs/DZ_currency_logo_ver_2.png';

function Crypto() {
    return (
        <div className="crypto-page">
            <div className="page-title-and-logo">
                <h1>DecentraZoo Crypto (DZ)</h1>
                <img src={Currency_logo} width={50} height={50}/>
            </div>
            <p>Welcome to the DecentraZoo Crypto page. Here, you can view the latest updates about our in-game currency, DZ, its market value, and more!</p>
            {/* Add more sections as needed */}
             <br></br>
            <h1>DZ Stats</h1>
            <div className='Coingraph'>
                <div>
                    <p>Price of DZ as of 10/27/2023</p>
                    <img src={Coin_graph}/>
                </div>
                <div className='Coinstats'>
                    <p>Number of Holders: 25,000</p>
                    <p>Market Cap: 291,000 (USD)</p>
                    <p>Liquidity: 22,170 (USD)</p>
                    <p>Burned: 250.03</p>
                </div>
            </div>

            <div className='Distribution'>
                <h1>Distribution of DZ</h1>
                <b>Total Number of DZ tokens that have been minted: 4,000,000,000</b>
                <ul>
                    <li>2,000,000,000 has been set aside for the game wallet</li>
                    <br></br>
                    <li>2,000,000,000 has been left to be circulated</li>
                    <br></br>
                    <ul>
                        <li>1,000,000,000 has been allocated to the public</li>
                        <br></br>
                        <li>1,000,000,000 has been allocated for game development</li>
                    </ul>

                </ul>
            </div>
        </div>
    );
}

export default Crypto;
