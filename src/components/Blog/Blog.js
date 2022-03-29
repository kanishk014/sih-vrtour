import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollButton from '../scrollToTop';
import './Blog.css';
const Blog = () => {
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

      {/* <!--=====================================--> */}
      {/* <!--=   Breadcrumb     Start            =--> */}
      {/* <!--=====================================--> */}

      <div class='breadcrumb-wrap'>
        <div class='container'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link to='/'>Home</Link>
              </li>
              <li class='breadcrumb-item active' aria-current='page'>
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!--=====================================--> */}
      {/* <!--=   Blog     Start                  =--> */}
      {/* <!--=====================================--> */}

      <section class='blog-wrap5'>
        <div class='container'>
          <div class='row gutters-40'>
            <div class='col-lg-8'>
              <div class='row'>
                <div class='col-lg-6 col-md-6'>
                  <div
                    class='blog-box1 blog-box2 wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <Link to='/blogdetail'>
                      <div class='item-img'>
                        <img
                          src='img/blog/blog29.jpg'
                          alt='blog'
                          width='520'
                          height='350'
                        />
                      </div>
                    </Link>
                    <div class='thumbnail-date'>
                      <div class='popup-date'>
                        <span class='day'>13</span>
                        <span class='month'>Aug</span>
                      </div>
                    </div>
                    <div class='item-content'>
                      <div class='entry-meta'>
                        <ul>
                          <li>
                            <Link to='/blogdetail'>
                              Akshardham Temple, New Delhi
                            </Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>5 min</Link>
                          </li>
                        </ul>
                      </div>
                      <div class='heading-title'>
                        <h3>
                          <span className='head-blog'>
                            A Flight To The Marvelous World of Akshardham Temple
                          </span>
                        </h3>
                      </div>
                      <div class='blog-button'>
                        <Link to='/blogdetail' class='item-btn'>
                          Read More<i class='fas fa-arrow-right'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6 col-md-6'>
                  <div
                    class='blog-box1 blog-box2 wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <Link to='/blogdetail'>
                      <div class='item-img'>
                        <img
                          src='img/blog/blog30.jpg'
                          alt='blog'
                          width='520'
                          height='350'
                        />
                      </div>
                    </Link>
                    <div class='thumbnail-date'>
                      <div class='popup-date'>
                        <span class='day'>13</span>
                        <span class='month'>Aug</span>
                      </div>
                    </div>
                    <div class='item-content'>
                      <div class='entry-meta'>
                        <ul>
                          <li>
                            <Link to='/blogdetail'>
                              Lotus Temple, New Delhi
                            </Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>4 min</Link>
                          </li>
                        </ul>
                      </div>
                      <div class='heading-title'>
                        <h3>
                          <span className='head-blog'>
                            A Unique Visit to Delhi’s Lotus Temple
                          </span>
                        </h3>
                      </div>
                      <div class='blog-button'>
                        <Link to='/blogdetail' class='item-btn'>
                          Read More<i class='fas fa-arrow-right'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6 col-md-6'>
                  <div
                    class='blog-box1 blog-box2 wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <Link to='/blogdetail'>
                      <div class='item-img'>
                        <img
                          src='img/blog/blog31.jpg'
                          alt='blog'
                          width='520'
                          height='350'
                        />
                      </div>
                    </Link>
                    <div class='thumbnail-date'>
                      <div class='popup-date'>
                        <span class='day'>13</span>
                        <span class='month'>Aug</span>
                      </div>
                    </div>
                    <div class='item-content'>
                      <div class='entry-meta'>
                        <ul>
                          <li>
                            <Link to='/blogdetail'>
                              Tirupati Balaji Temple, Tirumala
                            </Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>3 min</Link>
                          </li>
                        </ul>
                      </div>
                      <div class='heading-title'>
                        <h3>
                          <span className='head-blog'>
                            Tirupati Balaji Temple: A Complete Travel Guide
                          </span>
                        </h3>
                      </div>
                      <div class='blog-button'>
                        <Link to='/blogdetail' class='item-btn'>
                          Read More<i class='fas fa-arrow-right'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6 col-md-6'>
                  <div
                    class='blog-box1 blog-box2 wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <div class='item-img'>
                      <Link to='/blogdetail'>
                        <img
                          src='img/blog/blog32.jpg'
                          alt='blog'
                          width='520'
                          height='350'
                        />
                      </Link>
                    </div>
                    <div class='thumbnail-date'>
                      <div class='popup-date'>
                        <span class='day'>13</span>
                        <span class='month'>Aug</span>
                      </div>
                    </div>
                    <div class='item-content'>
                      <div class='entry-meta'>
                        <ul>
                          <li>
                            <Link to='/blogdetail'>
                              Golden Temple, Amritsar
                            </Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>5 min</Link>
                          </li>
                        </ul>
                      </div>
                      <div class='heading-title'>
                        <h3>
                          <span className='head-blog'>
                            The Golden Temple Amritsar, The Complete Travel
                            Guide
                          </span>
                        </h3>
                      </div>
                      <div class='blog-button'>
                        <Link to='/blogdetail' class='item-btn'>
                          Read More<i class='fas fa-arrow-right'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6 col-md-6'>
                  <div
                    class='blog-box1 blog-box2 wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <div class='item-img'>
                      <Link to='/blogdetail'>
                        <img
                          src='img/blog/blog33.jpg'
                          alt='blog'
                          width='520'
                          height='350'
                        />
                      </Link>
                    </div>
                    <div class='thumbnail-date'>
                      <div class='popup-date'>
                        <span class='day'>13</span>
                        <span class='month'>Aug</span>
                      </div>
                    </div>
                    <div class='item-content'>
                      <div class='entry-meta'>
                        <ul>
                          <li>
                            <Link to='/blogdetail'>India</Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>4 min</Link>
                          </li>
                        </ul>
                      </div>
                      <div class='heading-title'>
                        <h3>
                          <span className='head-blog'>
                            Top Pilgrimage Destinations in India
                          </span>
                        </h3>
                      </div>
                      <div class='blog-button'>
                        <Link to='/blogdetail' class='item-btn'>
                          Read More<i class='fas fa-arrow-right'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6 col-md-6'>
                  <div
                    class='blog-box1 blog-box2 wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <div class='item-img'>
                      <Link to='/blogdetail'>
                        <img
                          src='img/blog/blog34.jpg'
                          alt='blog'
                          width='520'
                          height='350'
                        />
                      </Link>
                    </div>
                    <div class='thumbnail-date'>
                      <div class='popup-date'>
                        <span class='day'>13</span>
                        <span class='month'>Aug</span>
                      </div>
                    </div>
                    <div class='item-content'>
                      <div class='entry-meta'>
                        <ul>
                          <li>
                            <Link to='/blogdetail'>Mumbai, India</Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>3 min</Link>
                          </li>
                        </ul>
                      </div>
                      <div class='heading-title'>
                        <h3>
                          <span className='head-blog'>
                            Important Things you must know before Aarti
                          </span>
                        </h3>
                      </div>
                      <div class='blog-button'>
                        <Link to='/blogdetail' class='item-btn'>
                          Read More<i class='fas fa-arrow-right'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6 col-md-6'>
                  <div
                    class='blog-box1 blog-box2 wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <div class='item-img'>
                      <Link to='/blogdetail'>
                        <img
                          src='img/blog/temple.jpg'
                          alt='blog'
                          width='520'
                          height='350'
                        />
                      </Link>
                    </div>
                    <div class='thumbnail-date'>
                      <div class='popup-date'>
                        <span class='day'>13</span>
                        <span class='month'>Aug</span>
                      </div>
                    </div>
                    <div class='item-content'>
                      <div class='entry-meta'>
                        <ul>
                          <li>
                            <Link to='/blogdetail'>New Delhi, India</Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>4 min</Link>
                          </li>
                        </ul>
                      </div>
                      <div class='heading-title'>
                        <h3>
                          <span className='head-blog'>
                            Most Famous Temple in India
                          </span>
                        </h3>
                      </div>
                      <div class='blog-button'>
                        <Link to='/blogdetail' class='item-btn'>
                          Read More<i class='fas fa-arrow-right'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6 col-md-6'>
                  <div
                    class='blog-box1 blog-box2 wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <div class='item-img'>
                      <Link to='/blogdetail'>
                        <img
                          src='img/blog/last.jpg'
                          alt='blog'
                          width='520'
                          height='350'
                        />
                      </Link>
                    </div>
                    <div class='thumbnail-date'>
                      <div class='popup-date'>
                        <span class='day'>13</span>
                        <span class='month'>Aug</span>
                      </div>
                    </div>
                    <div class='item-content'>
                      <div class='entry-meta'>
                        <ul>
                          <li>
                            <Link to='/blogdetail'>Karnatka, India</Link>
                          </li>
                          <li>
                            <Link to='/blogdetail'>5 min</Link>
                          </li>
                        </ul>
                      </div>
                      <div class='heading-title'>
                        <h3>
                          <span className='head-blog'>
                            Famous Temples in South India
                          </span>
                        </h3>
                      </div>
                      <div class='blog-button'>
                        <Link to='/blogdetail' class='item-btn'>
                          Read More<i class='fas fa-arrow-right'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='pagination-style-1'>
                <ul class='pagination'>
                  <li class='page-item'>
                    <Link class='page-link' to='/' aria-label='Previous'>
                      <span aria-hidden='true'>&laquo;</span>
                      <span class='sr-only'>Previous</span>
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link active' to='/'>
                      1
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to='/'>
                      2
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to='/'>
                      3
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to='/'>
                      4
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to='/' aria-label='Next'>
                      <span aria-hidden='true'>&raquo;</span>
                      <span class='sr-only'>Next</span>
                    </Link>
                  </li>
                </ul>
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

export default Blog;
