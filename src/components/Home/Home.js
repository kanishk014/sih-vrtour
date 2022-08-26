import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollButton from '../scrollToTop';
import Chatbotbtn from '../../chatbot/Chatbotbtn';
import './home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import KommunicateChat from '../../chat';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
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
  const [isclick, setIsClick] = useState(false);
  // console.log(isclick);

  gsap.registerPlugin(ScrollTrigger);
  // REVEAL //
  useEffect(() => {
    console.log(window.location.href);
  }, []);

  // Fetching properties
  const [properties, setProperties] = useState([]);
  useEffect(function () {
    const apiUrl = 'https://vrtour-sih.herokuapp.com/api/property/get';

    axios
      .get(apiUrl)
      .then((res) => {
        setProperties(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [searchText, setSearchText] = useState('');
  const [listHidden, setListHidden] = useState(true);

  // Search filter
  function searchChange(e) {
    setSearchText(e.target.value);
    setListHidden(false);
    if (e.target.value === '' || e.target.value.replace(/\s/g, '') == '') {
      setListHidden(true);
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <KommunicateChat />
      <Navbar />
      <section className='main-banner-wrap1 main-banner-wrap6 motion-effects-wrap adj-height'>
        <div className='shape-element'>
          <ul>
            <li>
              <img
                className='wow fadeInLeft colour'
                data-wow-delay='.3s'
                src='img/figure/shape33.svg'
                height='296'
                width='408'
                alt='shape'
              />
            </li>
            <li>
              <img
                className='colour'
                src='img/figure/shape34.svg'
                height='426'
                width='319'
                alt='shape'
              />
            </li>
            <li>
              <img
                className='motion-effects12 colour'
                src='img/figure/shape35.svg'
                width='150'
                height='150'
                alt='shape'
              />
            </li>
            <li>
              <img
                className='colour'
                src='img/figure/shape36.svg'
                width='70'
                height='27'
                alt='shape'
              />
            </li>
            <li>
              <img
                className='motion-effects13 colour'
                src='img/figure/shape37.svg'
                width='191'
                height='178'
                alt='shape'
              />
            </li>
            <li>
              <img
                className='colour'
                src='img/figure/shape38.svg'
                width='719'
                height='196'
                alt='shape'
              />
            </li>
          </ul>
          <div
            className='item-banner-thumb wow fadeInRight'
            data-wow-delay='.4s'
          >
            <img
              src='img/banner/banner6.png'
              width='1204'
              height='1156'
              alt='banner'
            />
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8'>
              <div className='main-banner-box1 main-banner-box6'>
                <h1 className='item-title wow fadeInUp' data-wow-delay='.4s'>
                  A journey becomes a pilgrimage as we discover, day by day
                </h1>
                <div className='bg-title-wrap' style={{ display: 'block' }}>
                  <span className='background-title solid'>Pilgrimages</span>
                </div>

                <div className='banner-search-wrap'>
                  <div className='main-search'>
                    <input
                      type='text'
                      name='search'
                      className='searchbar'
                      onChange={searchChange}
                      value={searchText}
                      placeholder='Enter Keyword here...'
                    ></input>
                    <button>
                      <span className='search-text'>SEARCH</span>
                      <SearchIcon />
                    </button>
                  </div>
                  <List className='search-list' hidden={listHidden}>
                    {properties
                      .filter((productsFound) => {
                        return productsFound.title
                          .toLowerCase()
                          .includes(searchText.toLowerCase());
                      })
                      .slice(0, 5)
                      .map((property, index) => {
                        return (
                          <ListItem key={index} className='list-item'>
                            <Link to={`/site?id=${property._id}`}>
                              {property.title}
                            </Link>
                          </ListItem>
                        );
                      })}
                  </List>
                  {/* <div className='row'>
                      <div className='col-sm-12'>
                        <div className='box'>
                          <div className='box-top'>
                            <div className='rld-single-input item'>
                              
                            </div>
                            <div className='rld-single-select ml-22'>
                              <select
                                className='select single-select'
                                style={{
                                  width: 'fit-content',
                                  padding: '0 20px',
                                }}
                              >
                                <option value='State'>State</option>
                                <option value='Andaman and Nicobar Islands'>
                                  Andaman and Nicobar Islands
                                </option>
                                <option value='Andhra Pradesh'>
                                  Andhra Pradesh
                                </option>
                                <option value='Arunachal Pradesh'>
                                  Arunachal Pradesh
                                </option>
                                <option value='Assam'>Assam</option>
                                <option value='Bihar'>Bihar</option>
                                <option value='Chandigarh'>Chandigarh</option>
                                <option value='Chhattisgarh'>
                                  Chhattisgarh
                                </option>
                                <option value='Dadra and Nagar Haveli'>
                                  Dadra and Nagar Haveli
                                </option>
                                <option value='Daman and Diu'>
                                  Daman and Diu
                                </option>
                                <option value='Delhi'>Delhi</option>
                                <option value='Goa'>Goa</option>
                                <option value='Gujarat'>Gujarat</option>
                                <option value='Haryana'>Haryana</option>
                                <option value='Himachal Pradesh'>
                                  Himachal Pradesh
                                </option>
                                <option value='Jammu and Kashmir'>
                                  Jammu and Kashmir
                                </option>
                                <option value='Jharkhand'>Jharkhand</option>
                                <option value='Karnataka'>Karnataka</option>
                                <option value='Kerala'>Kerala</option>
                                <option value='Lakshadweep'>Lakshadweep</option>
                                <option value='Madhya Pradesh'>
                                  Madhya Pradesh
                                </option>
                                <option value='Maharashtra'>Maharashtra</option>
                                <option value='Manipur'>Manipur</option>
                                <option value='Meghalaya'>Meghalaya</option>
                                <option value='Mizoram'>Mizoram</option>
                                <option value='Nagaland'>Nagaland</option>
                                <option value='Odisha'>Odisha</option>
                                <option value='Puducherry'>Puducherry</option>
                                <option value='Punjab'>Punjab</option>
                                <option value='Rajasthan'>Rajasthan</option>
                                <option value='Sikkim'>Sikkim</option>
                                <option value='Tamil Nadu'>Tamil Nadu</option>
                                <option value='Telengana'>Telengana</option>
                                <option value='Tripura'>Tripura</option>
                                <option value='Uttar Pradesh'>
                                  Uttar Pradesh
                                </option>
                                <option value='Uttarakhand'>Uttarakhand</option>
                                <option value='West Bengal'>West Bengal</option>
                              </select>
                            </div>

                            <div className='item rt-filter-btn'>
                              <div
                                className='dropdown-filter item'
                                onClick={() => setIsClick(!isclick)}
                              >
                                <span>
                                  <i className='fas fa-sliders-h'></i>
                                </span>
                              </div>
                              <div
                                className='filter-button-area'
                                style={{ height: '100%', display: 'flex' }}
                              >
                                <Link
                                  className='filter-btn'
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                  to='/'
                                >
                                  <span>Search</span>
                                  <i className='fas fa-search'></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`explore__form-checkbox-list full-filter ${
                              isclick && 'filter-block '
                            }`}
                          >
                            <div className='row'>
                              <div className='col-lg-4 col-md-6 py-1 pr-30 pl-0'>
                                <div className='form-group bed'>
                                  <label className='item-bedrooms'>
                                    Number of Visitors
                                  </label>
                                  <select
                                    className='form-select'
                                    aria-label='addcategory'
                                    // onChange={(e) => {
                                    // 	setpropDetails((prev) => {
                                    // 		return {
                                    // 			...prev,
                                    // 			category: e.target.value,
                                    // 		};
                                    // 	});
                                    // }}
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                              </div>

                              <div className='row' style={{ marginLeft: '0' }}>
                                <div
                                  className='col-lg-12 col-md-12 col-sm-12'
                                  style={{ padding: 0 }}
                                >
                                  <h4 className='text-dark'>Amenities</h4>
                                  <ul className='no-ul-list third-row'>
                                    <li>
                                      <input
                                        id='a-1'
                                        className='checkbox-custom'
                                        name='a-1'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-1'
                                        className='checkbox-custom-label'
                                      >
                                        Timings
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id='a-2'
                                        className='checkbox-custom'
                                        name='a-2'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-2'
                                        className='checkbox-custom-label'
                                      >
                                        Aarti Time
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id='a-3'
                                        className='checkbox-custom'
                                        name='a-3'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-3'
                                        className='checkbox-custom-label'
                                      >
                                        Tour Time
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id='a-4'
                                        className='checkbox-custom'
                                        name='a-4'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-4'
                                        className='checkbox-custom-label'
                                      >
                                        Land Area
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id='a-5'
                                        className='checkbox-custom'
                                        name='a-5'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-5'
                                        className='checkbox-custom-label'
                                      >
                                        Year Build
                                      </label>
                                    </li>

                                    <li>
                                      <input
                                        id='a-8'
                                        className='checkbox-custom'
                                        name='a-8'
                                        type='checkbox'
                                      />
                                      <label
                                        htmlFor='a-8'
                                        className='checkbox-custom-label'
                                      >
                                        Parking
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div> 
                              <div
                                className='filter-button'
                                style={{ justifyContent: 'center' }}
                              >
                                <Link to='/' className='filter-btn1'>
                                  Apply Filter
                                </Link>
                                <Link to='/' className='filter-btn1 reset-btn'>
                                  Reset Filter
                                  <i className='fas fa-redo-alt'></i>
                                </Link>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div> */}
                  <p className='item-para wow fadeInUp' data-wow-delay='.4s'>
                    Put your
                    <span className='banner-p'>
                      {' '}
                      heart, mind, and soul
                    </span>{' '}
                    into even your smallest acts.
                    {/* <span className='banner-p'> </span> */}
                    <span className='item-shape'>
                      <img
                        className='colour'
                        src='img/figure/shape39.svg'
                        width='79'
                        height='16'
                        alt='shape'
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='vr-hero'>
        <div className='vr-text'>
          <div class='section'>
            <h1 class='revealUp'>Experience Virtual Reality</h1>
          </div>
        </div>
        <div className='vr-iframe'>
          <iframe
            style={{}}
            src='https://sushantpatial.github.io/VR/hero.html'
            allowFullScreen
            allowvr='yes'
            allow='xr-spatial-tracking; vr; xr; accelerometer; magnetometer; gyroscope; webvr; webxr; encrypted-media; picture-in-picture'
            title='Iframe Example'
          ></iframe>
        </div>
      </section>
      <section className='property-wrap1 property-wrap-10'>
        <div className='container'>
          <div className='item-heading-center'>
            <span className='section-subtitle'>MOST VISITED</span>
            <h2 className='section-title'>Religious Places</h2>
            <div className='bg-title-wrap' style={{ display: 'block' }}>
              <span className='background-title solid'>Pilgrimages</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div
                className='property-box2 wow animated fadeInUp'
                data-wow-delay='.3s'
              >
                <div className='item-img'>
                  <Link to='/pilgrimage'>
                    <img
                      src='img/blog/blog4.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div className='item-category-box1'>
                    <div className='item-category'>Visit Now</div>
                  </div>
                  <div className='rent-price'>
                    <div className='item-price'>
                      ₹250
                      <span>
                        <i>/</i>person
                      </span>
                    </div>
                  </div>
                  <div className='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i className='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i className='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='item-category10'>
                  <Link to='/pilgrimage'>Temple</Link>
                </div>
                <div className='item-content'>
                  <div className='verified-area'>
                    <h3 className='item-title'>
                      <Link to='/pilgrimage'>Akshardham Temple</Link>
                    </h3>
                  </div>
                  <div className='location-area'>
                    <i className='flaticon-maps-and-flags'></i>New Delhi, India
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div
                className='property-box2 wow animated fadeInUp'
                data-wow-delay='.2s'
              >
                <div className='item-img'>
                  <Link to='/pilgrimage'>
                    <img
                      src='img/blog/blog5.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div className='item-category-box1'>
                    <div className='item-category'>Visit Now</div>
                  </div>
                  <div className='rent-price'>
                    <div className='item-price'>Free</div>
                  </div>
                  <div className='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i className='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i className='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='item-category10'>
                  <Link to='/pilgrimage'>Temple</Link>
                </div>
                <div className='item-content'>
                  <div className='verified-area'>
                    <h3 className='item-title'>
                      <Link to='/pilgrimage'>Lotus Temple</Link>
                    </h3>
                  </div>
                  <div className='location-area'>
                    <i className='flaticon-maps-and-flags'></i>New Delhi, India
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div
                className='property-box2 wow animated fadeInUp'
                data-wow-delay='.1s'
              >
                <div className='item-img'>
                  <Link to='/pilgrimage'>
                    <img
                      src='img/blog/blog6.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div className='item-category-box1'>
                    <div className='item-category'>Visit Now</div>
                  </div>
                  <div className='rent-price'>
                    <div className='item-price'>Free</div>
                  </div>
                  <div className='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i className='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i className='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='item-category10'>
                  <Link to='/pilgrimage'>Mandir</Link>
                </div>
                <div className='item-content'>
                  <div className='verified-area'>
                    <h3 className='item-title'>
                      <Link to='/pilgrimage'>Hanuman Mandir</Link>
                    </h3>
                  </div>
                  <div className='location-area'>
                    <i className='flaticon-maps-and-flags'></i>New Delhi, India
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div
                className='property-box2 wow animated fadeInUp'
                data-wow-delay='.3s'
              >
                <div className='item-img'>
                  <Link to='/pilgrimage'>
                    <img
                      src='img/blog/blog7.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div className='item-category-box1'>
                    <div className='item-category'>Visit Now</div>
                  </div>
                  <div className='rent-price'>
                    <div className='item-price'>Free</div>
                  </div>
                  <div className='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i className='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i className='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='item-category10'>
                  <Link to='/pilgrimage'>Gurudwara</Link>
                </div>
                <div className='item-content'>
                  <div className='verified-area'>
                    <h3 className='item-title'>
                      <Link to='/pilgrimage'>Golden Temple</Link>
                    </h3>
                  </div>
                  <div className='location-area'>
                    <i className='flaticon-maps-and-flags'></i>Amritsar, India
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div
                className='property-box2 wow animated fadeInUp'
                data-wow-delay='.6s'
              >
                <div className='item-img'>
                  <Link to='/pilgrimage'>
                    <img
                      src='img/blog/blog8.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div className='item-category-box1'>
                    <div className='item-category'>Visit Now</div>
                  </div>
                  <div className='rent-price'>
                    <div className='item-price'>Free</div>
                  </div>
                  <div className='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i className='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i className='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='item-category10'>
                  <Link to='/pilgrimage'>Church</Link>
                </div>
                <div className='item-content'>
                  <div className='verified-area'>
                    <h3 className='item-title'>
                      <Link to='/pilgrimage'>Shimla Christ Church</Link>
                    </h3>
                  </div>
                  <div className='location-area'>
                    <i className='flaticon-maps-and-flags'></i>Himachal Pradesh,
                    India
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div
                className='property-box2 wow animated fadeInUp'
                data-wow-delay='.2s'
              >
                <div className='item-img'>
                  <Link to='/pilgrimage'>
                    <img
                      src='img/blog/blog9.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div className='item-category-box1'>
                    <div className='item-category'>Visit Now</div>
                  </div>
                  <div className='rent-price'>
                    <div className='item-price'>Free</div>
                  </div>
                  <div className='react-icon'>
                    <ul>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Favourites'
                        >
                          <i className='flaticon-heart'></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Compare'
                        >
                          <i className='flaticon-left-and-right-arrows'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='item-category10'>
                  <Link to='/pilgrimage'>Mandir</Link>
                </div>
                <div className='item-content'>
                  <div className='verified-area'>
                    <h3 className='item-title'>
                      <Link to='/pilgrimage'>Kapaleeshwarar Temple</Link>
                    </h3>
                  </div>
                  <div className='location-area'>
                    <i className='flaticon-maps-and-flags'></i>Chennai, India
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='property-button'>
            <Link to='/pilgrimage' className='item-btn'>
              View All Locations
            </Link>
          </div>
        </div>
      </section>
      <section className='about-wrap-5 counter-appear motion-effects-wrap'>
        <div className='container'>
          <div className='item-element-shape'>
            <ul>
              <li>
                <img
                  className='wow animated fadeInRight'
                  data-wow-delay='.4s'
                  src='img/figure/shape30.svg'
                  width='312'
                  height='295'
                  alt='shape'
                />
              </li>
              <li>
                <img
                  className='motion-effects12'
                  src='img/figure/shape31.svg'
                  width='155'
                  height='92'
                  alt='shape'
                />
              </li>
              <li>
                <img
                  src='img/figure/shape32.svg'
                  width='575'
                  height='162'
                  alt='shape'
                />
              </li>
            </ul>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div
                className='about-box-9 wow animated fadeInLeft'
                data-wow-delay='.5s'
              >
                <div className='item-img'>
                  <img
                    src='img/blog/about2.png'
                    alt='shape'
                    width='567'
                    height='572'
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div
                className='about-box-10 wow animated fadeInRight'
                data-wow-delay='.3s'
              >
                <div className='item-heading-left mb-bottom'>
                  <span className='section-subtitle'>WHO WE ARE</span>
                  <h2 className='section-title'>
                    We are Offering The Best immersive experience for all
                    Pilgrimages
                  </h2>
                  <div className='bg-title-wrap' style={{ display: 'block' }}>
                    <span className='background-title solid'>About</span>
                  </div>
                  <p>
                    Experience places in a smarter way with Virtual reality.
                    Explore future at your home with all details and a seamless
                    experience.
                  </p>
                </div>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='about-svg-shape'>
                      <img
                        className='colour-1'
                        src='img/figure/shape28.svg'
                        alt='svg'
                      />
                      <div className='item-content'>
                        <div className='item-content'>
                          <div className='item-content__text'>
                            <div className='item-k'>
                              <span className='counterUp' data-counter='55'>
                                55
                              </span>
                              K
                            </div>
                          </div>
                          <p>Satisfied People</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='about-svg-shape'>
                      <img
                        className='colour-1'
                        src='img/figure/shape29.svg'
                        alt='svg'
                      />
                      <div className='item-content'>
                        <div className='item-content__text'>
                          <div className='item-k'>
                            <span className='counterUp' data-counter='11'>
                              11
                            </span>
                            K
                          </div>
                        </div>
                        <p>Verified Property</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  The promise to use best-in-className technology to reduce the
                  time and friction of visiting different places around the
                  country.
                </p>
                <div className='banner-button about-button-2'>
                  <Link to='/contact' className='banner-btn'>
                    Contact With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='location-wrap1'>
        <div className='container'>
          <div className='item-heading-center'>
            <span className='section-subtitle'>Top Areas</span>
            <h2 className='section-title'>Find Temples in Your Neighborhood</h2>
            <div className='bg-title-wrap' style={{ display: 'block' }}>
              <span className='background-title solid'>Locations</span>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.3s'
              >
                <Link to='/pilgrimage'>
                  <div className='item-img'>
                    <Link to='/pilgrimage'>
                      <img
                        src='img/blog/location-1.jpg'
                        alt='location'
                        width='424'
                        height='280'
                      />
                    </Link>
                  </div>
                  <div className='item-content'>
                    <div className='content-body'>
                      <div className='item-title'>
                        <h3>
                          <Link to='/pilgrimage'>Delhi</Link>
                        </h3>
                      </div>
                      <div className='item-category'>
                        <span>3 Locations</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.4s'
              >
                <Link to='/pilgrimage'>
                  <div className='item-img'>
                    <Link to='/pilgrimage'>
                      <img
                        src='img/blog/location-2.jpg'
                        alt='location'
                        width='424'
                        height='280'
                      />
                    </Link>
                  </div>
                  <div className='item-content'>
                    <div className='content-body'>
                      <div className='item-title'>
                        <h3>
                          <Link to='/pilgrimage'>Mumbai</Link>
                        </h3>
                      </div>
                      <div className='item-category'>
                        <span>6 Locations</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.5s'
              >
                <Link to='/pilgrimage'>
                  <div className='item-img'>
                    <Link to='/pilgrimage'>
                      <img
                        src='img/blog/location-3.jpg'
                        alt='location'
                        width='424'
                        height='280'
                      />
                    </Link>
                  </div>
                  <div className='item-content'>
                    <div className='content-body'>
                      <div className='item-title'>
                        <h3>
                          <Link to='/pilgrimage'>Bangalore</Link>
                        </h3>
                      </div>
                      <div className='item-category'>
                        <span>5 Locations</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-4'>
              <div
                className='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.6s'
              >
                <Link to='/pilgrimage'>
                  <div className='item-img'>
                    <Link to='/pilgrimage'>
                      <img
                        src='img/blog/location-4.jpg'
                        alt='location'
                        width='424'
                        height='280'
                      />
                    </Link>
                  </div>
                  <div className='item-content'>
                    <div className='content-body'>
                      <div className='item-title'>
                        <h3>
                          <Link to='/pilgrimage'>Punjab</Link>
                        </h3>
                      </div>
                      <div className='item-category'>
                        <span>8 Locations</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-lg-8 col-md-8'>
              <div
                className='location-box3 location-box4 wow zoomIn'
                data-wow-delay='.7s'
              >
                <Link to='/pilgrimage'>
                  <div className='item-img'>
                    <Link to='/pilgrimage'>
                      <img
                        src='img/blog/location-5.jpg'
                        alt='location'
                        width='846'
                        height='280'
                      />
                    </Link>
                  </div>
                  <div className='item-content'>
                    <div className='content-body'>
                      <div className='item-title'>
                        <h3>
                          <Link to='/pilgrimage'>Kolkata</Link>
                        </h3>
                      </div>
                      <div className='item-category'>
                        <span>2 Locations</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='banner-collection4 motion-effects-wrap'>
        <div className='item-element'>
          <ul>
            <li>
              <img
                className='wow fadeInLeft'
                data-wow-delay='.4s'
                src='img/figure/shape19.svg'
                width='388'
                height='417'
                alt='shape'
              />
            </li>
            <li>
              <img
                className='motion-effects12'
                src='img/figure/shape20.svg'
                width='191'
                height='178'
                alt='shape'
              />
            </li>
            <li>
              <img
                src='img/figure/shape21.svg'
                width='570'
                height='243'
                alt='shape'
              />
            </li>
          </ul>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='banner-box-2 wow fadeInLeft' data-wow-delay='.5s'>
                <div className='item-img'>
                  <img
                    src='img/banner/banner5.png'
                    width='309'
                    height='523'
                    alt='banner'
                    style={{ 'margin-bottom': '-180px' }}
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div
                className='banner-content-2 wow fadeInUp'
                data-wow-delay='.7s'
              >
                <div className='item-heading-left'>
                  <h2 className='section-title'>
                    We’re Providing the Best Virtual Reality Experience
                  </h2>
                  <p className='item-para'>
                    Explore places in VR. A smart way to visti any place and
                    experience using virtual reality
                  </p>
                  <p></p>
                </div>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='service-box-1'>
                      <div className='service-icon'>
                        <i className='fas fa-phone-alt'></i>
                      </div>
                      <div className='service-content'>
                        <h3 className='info-title'>Our Hot Line:</h3>
                        <p>+91 8826024495</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='service-box-1 service-box-2'>
                      <div className='service-icon'>
                        <i className='fas fa-phone-alt'></i>
                      </div>
                      <div className='service-content'>
                        <h3 className='info-title'>Mail Us:</h3>
                        <p>info@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='banner-button'>
                  <Link to='/contact' className='banner-btn'>
                    Connect With Us
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div
                className='banner-img-style-2 wow fadeInRight'
                data-wow-delay='.6s'
              >
                <img
                  src='img/banner/banner4.png'
                  width='569'
                  height='480'
                  alt='banner'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='banner-collection3'>
        <div className='container'>
          <div className='item-heading-center'>
            <div
              className='bg-title-wrap'
              style={{ display: 'block', position: 'relative', marginTop: 50 }}
            >
              <span className='background-title solid'>
                Cleanse Your Soul Today!
              </span>
            </div>
            <div className='banner-button'>
              <Link to='/contact' className='banner-btn'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ScrollButton scrollState={scrollState} />
      <div>{/* <KommunicateChat /> */}</div>
      <Footer />
    </div>
  );
};

export default Home;
