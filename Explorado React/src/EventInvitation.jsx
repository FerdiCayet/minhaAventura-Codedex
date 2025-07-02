import { useState } from 'react';

export default function EventInvitation() {
    const [interestedCount, setInterestedCount] = useState(0);
    const [goingCount, setGoingCount] = useState(0);
    const [interestedHovered, setInterestedHovered] = useState(false);
    const [goingHovered, setGoingHovered] = useState(false);

    const handleInterestedClick = () => {
        setInterestedCount((prev) => prev + 1);
    };

    const handleGoingClick = () => {
        setGoingCount((prev) => prev + 1);
    };

    const handleInterestedKeyDown = (e) => {
        if (e.key === ' ' || e.key === 'SpaceBar') {
            e.target.style.backgroundColor = '#000112';
            e.target.style.color = 'white';
            setInterestedCount((prev) => prev + 1);
        }
        setInterestedHovered(true);
    };

    const handleInterestedKeyUp = (e) => {
        e.target.style.color = 'black';
        e.target.style.backgroundColor = '#efefef';
    };

    const handleGoingKeyDown = (e) => {
        if (e.key === ' ' || e.key === 'SpaceBar') {
            e.target.style.backgroundColor = '#000112';
            e.target.style.color = 'white';
            setGoingCount((prev) => prev + 1);
        }
        setGoingHovered(true);
    };

    const handleGoingKeyUp = (e) => {
        e.target.style.color = 'black';
        e.target.style.backgroundColor = '#efefef';
    };

    const handleInterestedMouseEnter = () => {
        setInterestedHovered(true);
    };

    const handleInterestedMouseLeave = () => {
        setInterestedHovered(false);
    };

    const handleGoingMouseEnter = () => {
        setGoingHovered(true);
    };

    const handleGoingMouseLeave = () => {
        setGoingHovered(false);
    };

    const handleInterestedFocus = () => {
        setInterestedHovered(true);
    };

    const handleInterestedBlur = (e) => {
        setInterestedHovered(false);
        e.target.removeAttribute('style');
    };

    const handleGoingFocus = () => {
        setGoingHovered(true);
    };

    const handleGoingBlur = (e) => {
        setGoingHovered(false);
        e.target.removeAttribute('style');
    };

    return (
        <div className="container">
            <div className="hero-image">
                <img src="https://i.imgur.com/LAi9iHS.jpeg" alt="Event" style={{ height: '200px' }} />
            </div>
            <div className="description">
                <h2>You're invited to WaterFest! 🏝️</h2>
                <p>The hardest part is showing up. After you're here, you've already won. Join other winners like you for a weekend of fun and relaxation!</p>
            </div>
            <div className="buttons-container">
                <button
                    tabIndex="0"
                    className={`interested-button ${interestedHovered ? 'hovered' : ''}`}
                    onClick={handleInterestedClick}
                    onKeyDown={handleInterestedKeyDown}
                    onKeyUp={handleInterestedKeyUp}
                    onMouseEnter={handleInterestedMouseEnter}
                    onMouseLeave={handleInterestedMouseLeave}
                    onFocus={handleInterestedFocus}
                    onBlur={handleInterestedBlur}
                >
                    Interested ({interestedCount})
                </button>
                <button
                    tabIndex="0"
                    className={`going-button ${goingHovered ? 'hovered' : ''}`}
                    onClick={handleGoingClick}
                    onKeyDown={handleGoingKeyDown}
                    onKeyUp={handleGoingKeyUp}
                    onMouseEnter={handleGoingMouseEnter}
                    onMouseLeave={handleGoingMouseLeave}
                    onFocus={handleGoingFocus}
                    onBlur={handleGoingBlur}
                >
                    Going ({goingCount})
                </button>
            </div>
        </div>
    );
}
