import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    console.log(pathname);

    if (pathname == "/") {
      gsap.utils.toArray('.revealUp').forEach(function (elem) {
        ScrollTrigger.create({
          trigger: elem,
          start: 'top 60%',
          end: 'bottom 0%',
          onEnter: function () {
            gsap.fromTo(
              elem,
              { y: 100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: 'back',
                overwrite: 'auto',
              }
            );
            document.getElementById('rt-header').classList.add('navbar-rollup');
          },
          onLeave: function () {
            gsap.fromTo(
              elem,
              { autoAlpha: 1 },
              { autoAlpha: 0, overwrite: 'auto' }
            );
            document
              .getElementById('rt-header')
              .classList.remove('navbar-rollup');
          },
          onEnterBack: function () {
            gsap.fromTo(
              elem,
              { y: -100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: 'back',
                overwrite: 'auto',
              }
            );
            document.getElementById('rt-header').classList.add('navbar-rollup');
          },
          onLeaveBack: function () {
            gsap.fromTo(
              elem,
              { autoAlpha: 1 },
              { autoAlpha: 0, overwrite: 'auto' }
            );
            document
              .getElementById('rt-header')
              .classList.remove('navbar-rollup');
          },
        });
      });
    } else {
        document.getElementById('rt-header').style = "margin-top: 0px !important";
    }
  }, [pathname]);

  return null;
}