import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollButton from '../scrollToTop';
const BlogDetail = () => {
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

      <div
        class='rt-header-menu mean-container position-relative'
        id='meanmenu'
      >
        <div class='mean-bar'>
          <Link to='/'>
            <img src='img/logo.svg' alt='logo' class='img-fluid' />
          </Link>
          <div class='mean-bar--right'>
            <div class='actions search'>
              <Link to='#template-search' class='item-icon' title='Search'>
                <i class='fas fa-search'></i>
              </Link>
            </div>
            <div class='actions user'>
              <Link to='/profile'>
                <i class='flaticon-user'></i>
              </Link>
            </div>
            <span class='sidebarBtn'>
              <span class='bar'></span>
              <span class='bar'></span>
              <span class='bar'></span>
              <span class='bar'></span>
            </span>
          </div>
        </div>
      </div>
      <div class='breadcrumb-wrap'>
        <div class='container'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link to='/'>Home</Link>
              </li>
              <li class='breadcrumb-item active' aria-current='page'>
                Blogs
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section class='blog-wrap6'>
        <div class='container'>
          <div class='row gutters-40'>
            <div class='col-lg-8'>
              <div class='row'>
                <div class='col-lg-12'>
                  <div
                    class='blog-box1 blog-box3 wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <div class='item-img img-style-3'>
                      <Link to='/blog'>
                        <img
                          src='img/blog/Akshardhamtt.jpg'
                          alt='blog'
                          width='739'
                          height='399'
                        />
                      </Link>
                    </div>
                    <div class='item-content'>
                      <div class='entry-meta'>
                        <ul>
                          <li class='theme-cat'>
                            <Link to='/blog'>
                              <img
                                src='img/theme1.png'
                                alt='theme'
                                width='31'
                                height='31'
                              />
                              by Admin
                            </Link>
                          </li>
                          <li class='calendar-icon'>
                            <Link to='/blog'>
                              <i class='far fa-calendar-alt'></i>February 28,
                              2020
                            </Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>New Delhi</Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>5 mins</Link>
                          </li>
                        </ul>
                      </div>
                      <div class='heading-title title-style-2'>
                        <h3>
                          <Link to='/blogdetail'>
                            A Flight To The Marvelous World of Akshardham Temple
                          </Link>
                        </h3>
                        <p>
                          'Akshardham' means the divine abode of God. It is
                          hailed as an eternal place of devotion, purity and
                          peace. Swaminarayan Akshardham at New Delhi is a
                          Mandir – an abode of God, a Hindu house of worship,
                          and a spiritual and cultural campus dedicated to
                          devotion, learning and harmony. Timeless Hindu
                          spiritual messages, vibrant devotional traditions and
                          ancient architecture all are echoed in its art and
                          architecture.The mandir is a humble tribute to Bhagwan
                          Swaminarayan (1781- 1830), the avatars, devas and
                          great sages of Hinduism. The traditionally-styled
                          complex was inaugurated on 6 November 2005 with the
                          blessings of HH Pramukh Swami Maharaj and through the
                          devoted efforts of skilled artisans and volunteers.`
                        </p>
                      </div>
                      <div class='quotation-style'>
                        <blockquote class='item-quotation'>
                          Facts and Figures : Opened 6th November 2005
                          Constructed by Bochasanwasi Shri Akshar Purushottam
                          Swaminarayan Sanstha (BAPS) Inspired by HH Yogiji
                          Maharaj (1892-1971 CE) Created by His Holiness Pramukh
                          Swami Maharaj More than 300,000,000 volunteer hours
                          went into making the complex Over 8,000 volunteers
                          from across the world participated in building it
                          Mandir built from intricately carved sandstone and
                          marble Exhibitions on Hinduism, including Bhagwan
                          Swaminarayan's life and teachings such as prayer,
                          compassion, and non-violence. Open gardens, water
                          bodies and step-well styled courtyard{' '}
                        </blockquote>
                      </div>
                      <p class='style-2'>
                        Major Outlooks : Mandir Abhishek Mandap Exhibitions
                        Water Show Details: Entry: Free and open to all.
                        Timings: 9:30am to 8:00pm. Aarti: 10:00am and 6:00pm.
                        Time to See: 45 minutes Features and Activities: prashad{' '}
                      </p>
                      <div class='row gutters-10'>
                        <div class='col-lg-6 col-md-6 col-sm-6'>
                          <div class='single-blog-img'>
                            <img
                              src='img/blog/Akshardham-night.jpg'
                              alt='blog'
                              width='363'
                              height='240'
                            />
                          </div>
                        </div>
                        <div class='col-lg-6 col-md-6 col-sm-6'>
                          <div class='single-blog-img'>
                            <img
                              src='img/blog/Akshardham-Temple-garden.jpg'
                              alt='blog'
                              width='363'
                              height='240'
                            />
                          </div>
                        </div>
                        <div class='col-lg-12'>
                          <div class='single-blog-img single-blog-img2'>
                            <img
                              src='img/blog/akshardhaminside.jpg'
                              alt='blog'
                              width='739'
                              height='370'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-4 widget-break-lg sidebar-widget'>
              <div class='widget widget-search-box'>
                <h3 class='widget-subtitle'>Search</h3>
                <div class='widget-form-box'>
                  <input
                    class='form-control'
                    type='text'
                    placeholder='What are you looking for?'
                  />
                  <div class='item-search'>
                    <i class='fas fa-search'></i>
                  </div>
                </div>
              </div>
              <div class='widget widget-categoery-box'>
                <h3 class='widget-subtitle'>Categories</h3>
                <ul class='categoery-list'>
                  <li>
                    <Link to='/blogdetail'>
                      Temple<span class='categoery-count'>03</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>
                      Mosque
                      <span class='categoery-count'>05</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>
                      Church<span class='categoery-count'>01</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>
                      Gurudwara<span class='categoery-count'>05</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>
                      Shrine<span class='categoery-count'>08</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>
                      Mandir<span class='categoery-count'>09</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div class='widget widget-taglist'>
                <h3 class='widget-subtitle'>Popular Tags</h3>
                <ul class='tag-list'>
                  <li>
                    <Link to='/blogdetail'>Temple</Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>Church</Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>Shrine</Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>Mosque</Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>Tourists</Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>Monuments</Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>Pilgrimage</Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>Akshardham</Link>
                  </li>
                  <li>
                    <Link to='/blogdetail'>Lotus</Link>
                  </li>
                </ul>
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
            <div class='col-xl-5 col-lg-6'>
              <div class='newsletter-layout1'>
                <div class='item-heading'>
                  <h2 class='item-title'>Sign up for newsletter </h2>
                  <h3 class='item-subtitle'>Get latest news and update</h3>
                </div>
              </div>
            </div>
            <div class='col-xl-7 col-lg-6'>
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
export default BlogDetail;
