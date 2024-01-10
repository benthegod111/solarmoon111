import React, { useState, useEffect } from 'react';
import dogNoBg from '../assets/btc.png';

export default function Overlay({ playAudio }) {
  const [isOpen, setIsOpen] = useState(true);
  const [animateImages, setAnimateImages] = useState(false);

  useEffect(() => {
    if (animateImages) {
      // Trigger animation by setting translateY and flip vertically with ease transition
      document.querySelectorAll('.rocket').forEach((rocket) => {
        if (rocket.classList.contains('rocketFlip')) {
          // If the rocket has the 'rocketFlip' class, maintain the flipped state
          rocket.style.transition = 'transform 1s ease'; // Adjust the duration and easing as needed
          rocket.style.transform = 'translateY(-1000px) translateX(-1000px) scaleY(-1)';
        } else {
          // If the rocket doesn't have the 'rocketFlip' class, apply the default transform
          rocket.style.transition = 'transform 1s ease'; // Adjust the duration and easing as needed
          rocket.style.transform = 'translateY(-1000px) translateX(1000px)';
        }
      });
    }
  }, [animateImages]);

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    playAudio();

    // Start animation when CONTINUE is clicked
    setAnimateImages(true);

    // Reset animation after a delay (adjust as needed)
    setTimeout(() => {
      setAnimateImages(false);
      document.querySelectorAll('.rocket').forEach((rocket) => {
        rocket.style.transform = 'translateY(0)';
      });
    }, 1500); // Adjust the delay based on your animation duration
  }

  return (
    <>
      <div
        style={{
          opacity: isOpen ? 1 : 0,
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'opacity 1s ease, max-height 1s ease',
        }}
        className="overlay"
      >
        <div className="overlay-inside">
          <h1 className="heading overlayText">
            <span className="whiteText">BTC ETF</span> <br/>APPROVED
          </h1>
          <div className="imagesOverlay">
            <div>
              <img className="rocket rocketLeft rocketFlip" style={{
                transition: 'transform 0.5s ease'
              }} src="https://media.tenor.com/GocCvG7hs78AAAAi/rocket-joypixels.gif" alt="rocket" />
            </div>
            <div className="spinBlock">
              <img className="dogNoBg" alt="dog" src={dogNoBg} />
            </div>
            <div>
              <img className="rocket" style={{
                transition: 'transform 0.5s ease'
              }} src="https://media.tenor.com/GocCvG7hs78AAAAi/rocket-joypixels.gif" alt="rocket" />
            </div>
          </div>
          <div>
            <button onClick={toggle} className="button">
              ENTER THE ISLAND
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
