import React from 'react';
import './Progress.css';

function Progress() {
    return (
        <div className="page-layout">
            <h1>DecentraZoo Development Progress</h1>
            <p>Stay updated with the latest developments of DecentraZoo! We're constantly working to bring you an exciting and seamless gaming experience.</p>
            
            <h2>Current Milestones:</h2>
            <ul>
                <li>Alpha version testing - 60% complete</li>
                <li>Blockchain integration - 45% complete</li>
                <li>UI/UX overhaul - 70% complete</li>
                <li>Gameplay mechanics refinement - 50% complete</li>
                {/* More milestones can be added */}
            </ul>

            <h2>Upcoming Features:</h2>
            <ul>
                <li>Multiplayer mode</li>
                <li>New in-game events</li>
                <li>Mobile compatibility</li>
                {/* More features can be added */}
            </ul>

            {/* Additional sections or updates can be included as needed */}
        </div>
    );
}

export default Progress;