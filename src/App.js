// App.jsx
import React from 'react';
import './App.css';
import sound from './assets/music/music.mp3';
import hawking from './assets/btc.png';
import aboutImg from './assets/approved.png';
import telegram from './assets/telegram.svg';
import twitter from './assets/twitter.svg';
import Overlay from './components/Overlay';

function App() {
  const contract = 'TBA';


  const playAudio = () => {
    const audio = document.querySelector('.audio');
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="App">
      <div className="insideApp">
        <Overlay playAudio={playAudio} />
        <audio autoPlay className="audio" loop>
          <source src={sound} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="mainSection">
          <div className="mainMargin">
            <div className="imgBlock">
              <img className="hawkingImg" alt="btcetf" src={hawking} />
            </div>
            <div className="textBlock">
              <div className="caWidget">
                <p className="caWidgetText">CA: {contract}</p>
              </div>
              <div className="headingDiv">
                <h1 className="heading">
                  BITCOIN ETF <br />
                  <span className="whiteText">FINALLY APPROVED</span>
                </h1>
                <a href="www.google.com">
                  <button class="button mainButton">
                    JET THE $BTCETF
                  </button>
                </a>
                <div className="socialsBlock">
                  <h3 className="socialsText whiteText">SOCIALS:</h3>
                  <img className="socialsImg" src={telegram} alt="telegram"/>
                  <img className="socialsImg" src={twitter} alt="twitter"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSection">
          <div className="about-inside">
            <div className="textBlock">
              <h2 className="heading2">
                BREAKING NEWS:<br/>
                BTC ETF FINALLY <br/>
                APPROVED BY SEC
              </h2>
              <p className="bodyText">
              BTC APPORVED FINALLY BTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLYBTC APPORVED FINALLY
              </p>
            </div>
            <div className="imgBlock">
              <img className="aboutImg" src={aboutImg} alt="STEPHEN HAWKING ON THE VACATION"/>
            </div>
          </div>
        </div>
        <div className="imgSection">
          <div className="runningTextBlock">
            <h1 className="heading runningText">
              $HAWSEX<span className="whiteText">$BTCETF</span>$BTCETF<span className="whiteText">$BTCETF</span>$BTCETF<span className="whiteText">$BTCETF</span>$BTCETF<span className="whiteText">$BTCETF</span>$BTCETF<span className="whiteText">$BTCETF</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
