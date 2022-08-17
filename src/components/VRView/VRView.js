import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollButton from '../scrollToTop';
import Chatbotbtn from '../../chatbot/Chatbotbtn';

const VRView = () => {
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

  return (
    <div>
      <Navbar />

      <ScrollButton scrollState={scrollState} />
      <div>
        <Chatbotbtn />
      </div>
      <Footer />
    </div>
  );
};

export default VRView;
