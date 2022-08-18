import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollButton from '../scrollToTop';
import Chatbotbtn from '../../chatbot/Chatbotbtn';
import './asset/demo.css';

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

  useEffect(() => {
    var PanoViewer = window.eg.view360.PanoViewer;
    var container = document.getElementById('myPanoViewer');
    var panoViewer = new PanoViewer(container, {
      image: 'https://sushantpatial.github.io/VR/images/akshardham.jpg',
      projectionType: 'equirectangular',
    });

    var panoviewerSet = document.getElementById('panoSet');
    window.PanoControls.init(panoviewerSet, panoViewer, {
      enableGyroOption: true,
      enableTouchOption: true,
    });
    window.PanoControls.showLoading();
  }, []);

  // useEffect(() => {
  //   function googleTranslateElementInit() {
  //     new window.google.translate.TranslateElement(
  //         {pageLanguage: 'en'},
  //         'google_translate_element'
  //     );
  // }
  // }, []);

  return (
    <div>
      <Navbar />

      <div className='vr-top'>
        <h4>Start building your app. Happy Coding!</h4>

        <div className='panoviewer-container viewer'>
          <div id='panoSet'>
            <div className='panoviewer container' id='myPanoViewer'></div>
          </div>
        </div>
      </div>

      <ScrollButton scrollState={scrollState} />
      <div>
        <Chatbotbtn />
      </div>
      <Footer />
    </div>
  );
};

export default VRView;
