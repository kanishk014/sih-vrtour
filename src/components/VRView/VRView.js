import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollButton from '../scrollToTop';
import Chatbotbtn from '../../chatbot/Chatbotbtn';
// import test from '../../../public/video/test.mp4';
import VideoPlayer from 'react-video-js-player';
import VrPlayer from 'react-vr-player';

const VRView = () => {
  //   const videoSrc = '/video/test.mp4';
  //   const poster =
  //     'https://media.easemytrip.com/media/Blog/India/637116640324801740/637116640324801740ptZ4Mc.jpg';

  const [scrollState, setScrollState] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      var scroll = window.pageYOffset;
      if (scroll <= 100) {
        setScrollState(false);
      } else {
        setScrollState(true);
      }
    });
  });

  //   const sources = url: '/video/test.mp4', type: 'video/mp4';
  const keys = {
    // If you want to re-define the keys, here are the defaults
    left: 'A',
    right: 'D',
    up: 'W',
    down: 'S',
    rotateLeft: 'Q',
    rotateRight: 'E',
    fullScreen: 'F',
    zeroSensor: 'Z',
    playPause: ' ',
  };

  return (
    <div>
      <Navbar />

      <VrPlayer
        sources='/video/test.mp4'
        brand='Some Brand Name'
        title='Some Video Title'
        keys={keys}
      />

      <ScrollButton scrollState={scrollState} />
      <div>
        <Chatbotbtn />
      </div>
      <Footer />
    </div>
  );
};

export default VRView;
