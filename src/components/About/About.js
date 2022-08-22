import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './about.css';
import { Link } from 'react-router-dom';
import ScrollButton from '../scrollToTop';
const About = () => {
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
      <div class='breadcrumb-wrap breadcrumb-wrap-2'>
        <div class='container'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link to='/'>Home</Link>
              </li>
              <li class='breadcrumb-item active' aria-current='page'>
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section class='about-wrap2'>
        <div class='container'>
          <div class='row flex-row-reverse flex-lg-row'>
            <div class='col-xl-6 col-lg-6'>
              <div class='about-img'>
                <img
                  src='img/blog/about8.webp'
                  alt='about'
                  width='746'
                  height='600'
                />
              </div>
            </div>
            <div class='col-xl-6 col-lg-6'>
              <div class='about-box3 wow fadeInUp' data-wow-delay='.2s'>
                <span class='item-subtitle'>About Us</span>
                <h2 class='item-title'>
                  We're on a Mission to Change View of Monuments/Temples.
                </h2>
                <p>
                  VRTOUR is a unique digital platform which offers 360 degree
                  view solution to our visitors for all their travel issues. The
                  portal is completely devoted to meet every requirement of the
                  visitor.
                </p>
                <div class='row'>
                  <div class='col-lg-6 col-md-6 col-sm-6'>
                    <div class='about-layout1'>
                      <div class='item-img'>
                        <img
                          src='img/figure/shape14.png'
                          alt='shape'
                          width='68'
                          height='60'
                        />
                      </div>
                      <h3 class='item-sm-title'>Temples</h3>
                      <p>We provide credible information about pilgrimages.</p>
                    </div>
                  </div>
                  <div class='col-lg-6 col-md-6 col-sm-6'>
                    <div class='about-layout1'>
                      <div class='item-img'>
                        <img
                          class='colour-1'
                          src='img/figure/shape15.svg'
                          alt='shape'
                          width='62'
                          height='57'
                        />
                      </div>
                      <h3 class='item-sm-title'>Make a Donation</h3>
                      <p>A robust payment mechanism with secured systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='team-wrap1 team-wrap2'>
        <div class='container'>
          <div class='item-heading-center mb-20'>
            <span class='section-subtitle'>Expertise Is Here</span>
            <h2 class='section-title'>Our Exclusive Team</h2>
            <div class='bg-title-wrap' style={{ display: 'block' }}>
              <span class='background-title solid'>Our Team</span>
            </div>
          </div>

          <div class='row'>
            <div class='col-lg-4 col-md-6 col-sm-6'>
              <div
                class='team-box1 team-box2 wow fadeInUp'
                data-wow-delay='.2s'
              >
                <div class='item-img'>
                  <div>
                    <img
                      src='img/team/team1.jpg'
                      alt='team'
                      height='240'
                      width='240'
                      style={{ height: '240px', width: '240px' }}
                    />
                  </div>
                  <ul class='team-social-1'>
                    <li class='social-item'>
                      <div class='social-hover-icon social-link'>
                        <i class='fas fa-share-alt'></i>
                      </div>
                      <ul class='team-social-dropdown'>
                        <li class='social-item'>
                          <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://twitter.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://www.linkedin.com/in/devesh-jain-b68b3119a/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class='item-content'>
                  <div class='item-title'>
                    <h3>
                      <div>Devesh Jain</div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-6 col-sm-6'>
              <div
                class='team-box1 team-box2 wow fadeInUp'
                data-wow-delay='.6s'
              >
                <div class='item-img'>
                  <div>
                    <img
                      src='img/team/team2.jpg'
                      alt='team'
                      height='240'
                      width='240'
                      style={{ height: '240px', width: '240px' }}
                    />
                  </div>
                  <ul class='team-social-1'>
                    <li class='social-item'>
                      <div class='social-hover-icon social-link'>
                        <i class='fas fa-share-alt'></i>
                      </div>
                      <ul class='team-social-dropdown'>
                        <li class='social-item'>
                          <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://twitter.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://www.linkedin.com/in/chiragseth/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class='item-content'>
                  <div class='item-title'>
                    <h3>
                      <div>Chirag Seth</div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-6 col-sm-6'>
              <div
                class='team-box1 team-box2 wow fadeInUp'
                data-wow-delay='.4s'
              >
                <div class='item-img'>
                  <div>
                    <img
                      src='img/team/team3.jpg'
                      alt='team'
                      height='240'
                      style={{ height: '240px', width: '240px' }}
                      width='240'
                    />
                  </div>
                  <ul class='team-social-1'>
                    <li class='social-item'>
                      <div class='social-hover-icon social-link'>
                        <i class='fas fa-share-alt'></i>
                      </div>
                      <ul class='team-social-dropdown'>
                        <li class='social-item'>
                          <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://twitter.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://www.linkedin.com/in/sushant-patial-2895a7204/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class='item-content'>
                  <div class='item-title'>
                    <h3>
                      <div>Sushant Patial</div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-6 col-sm-6'>
              <div
                class='team-box1 team-box2 wow fadeInUp'
                data-wow-delay='.2s'
              >
                <div class='item-img'>
                  <div>
                    <img
                      src='img/team/team4.jpg'
                      alt='team'
                      height='240'
                      width='240'
                      style={{ height: '240px', width: '240px' }}
                    />
                  </div>
                  <ul class='team-social-1'>
                    <li class='social-item'>
                      <div class='social-hover-icon social-link'>
                        <i class='fas fa-share-alt'></i>
                      </div>
                      <ul class='team-social-dropdown'>
                        <li class='social-item'>
                          <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://twitter.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://www.linkedin.com/in/kanishksharma14/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class='item-content'>
                  <div class='item-title'>
                    <h3>
                      <div>Kanishk Sharma</div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-6 col-sm-6'>
              <div
                class='team-box1 team-box2 wow fadeInUp'
                data-wow-delay='.2s'
              >
                <div class='item-img'>
                  <div>
                    <img
                      src='img/team/team5.jpg'
                      alt='team'
                      height='240'
                      width='240'
                      style={{ height: '240px', width: '240px' }}
                    />
                  </div>
                  <ul class='team-social-1'>
                    <li class='social-item'>
                      <div class='social-hover-icon social-link'>
                        <i class='fas fa-share-alt'></i>
                      </div>
                      <ul class='team-social-dropdown'>
                        <li class='social-item'>
                          <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://twitter.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://www.linkedin.com/in/aman090901/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class='item-content'>
                  <div class='item-title'>
                    <h3>
                      <div>Aman Dutt Bhagat</div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-6 col-sm-6'>
              <div
                class='team-box1 team-box2 wow fadeInUp'
                data-wow-delay='.2s'
              >
                <div class='item-img'>
                  <div>
                    <img
                      src='img/team/team0.jpeg'
                      alt='team'
                      height='240'
                      width='240'
                      style={{ height: '240px', width: '240px' }}
                    />
                  </div>
                  <ul class='team-social-1'>
                    <li class='social-item'>
                      <div class='social-hover-icon social-link'>
                        <i class='fas fa-share-alt'></i>
                      </div>
                      <ul class='team-social-dropdown'>
                        <li class='social-item'>
                          <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://twitter.com/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                        </li>
                        <li class='social-item'>
                          <a
                            href='https://www.linkedin.com/in/ridhima-jain-20bb2121a/'
                            target='_blank'
                            rel='noreferrer'
                            class='social-link'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class='item-content'>
                  <div class='item-title'>
                    <h3>
                      <div>Ridhima Jain</div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='newsletter-wrap1'>
        <div class='shape-img1'>
          <img
            src='img/figure/shape13.png'
            alt='figure'
            width='356'
            height='130'
          />
        </div>
        <div class='container'>
          <div class='row align-items-center'>
            <div class='col-lg-5'>
              <div class='newsletter-layout1'>
                <div class='item-heading'>
                  <h2 class='item-title'>Sign up for newsletter</h2>
                  <h3 class='item-subtitle'>Get latest news and update</h3>
                </div>
              </div>
            </div>
            <div class='col-lg-7'>
              <div class='newsletter-form'>
                <div class='input-group'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Enter e-mail addess'
                  />
                  <div class='input-group-append'>
                    <button class='btn btn-outline-secondary' type='button'>
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollButton scrollState={scrollState} />

      <Footer />
    </div>
  );
};

export default About;
