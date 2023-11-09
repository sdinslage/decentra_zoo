import React from 'react';
import './Progress.css';

function Progress() {
    const youtubeLink = "https://www.youtube.com/embed/cqHvFaxbHTY";
    return (
        <div>
            <section className='title'>
                <h1 className='heading'>DecentraZoo Development Progress</h1>
                <p className='subhead'>Stay updated with the latest developments of DecentraZoo! We're constantly working to bring you an exciting and seamless gaming experience.</p>
            </section>

            <section className='timeline-layout'>
                <h2 className='timeline-head'>Current Milestones:</h2>
                <ul>
                    <li>Alpha version testing - 50% complete</li>
                    <li>Blockchain integration - 45% complete</li>
                    <li>UI/UX overhaul - 15% complete</li>
                    <li>Gameplay mechanics refinement - 50% complete</li>
                    {/* More milestones can be added */}
                </ul>
            </section>

            {/* Video section */}
            <section className="video-layout">
                <iframe 
                    className="gameplay-video" 
                    src={youtubeLink} 
                    title="DecentraZoo Gameplay Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                <div className="download-link">
                    <a href={`${process.env.PUBLIC_URL}/DZ_Unity.zip`} download="DZ_Unity.zip">Download Alpha Version for Testing</a>
                </div>
            </section>

            <section className='timeline-layout'>
                <h2 className='timeline-head'>Upcoming Features:</h2>
                <ul>
                    <li>Implement Multiplayer</li>
                    <li>Release Day Events</li>
                    <li>Marketplace Updates</li>
                    {/* More features can be added */}
                </ul>
            </section>

            {/* Additional sections or updates can be included as needed */}
        </div>
    );
}

export default Progress;