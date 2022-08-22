import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/userActions';

import PersonIcon from '@mui/icons-material/Person';
import SideBar from './SideBar';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const languages = [
  { value: '', text: 'Options' },
  { value: 'en', text: 'English' },
  { value: 'hi-IN', text: 'Hindi' },
  { value: 'bn', text: 'Bengali' },
  { value: 'te', text: 'Tamil' },
  { value: 'mr', text: 'Marathi' },
  { value: 'pa', text: 'Punjabi' },
  { value: 'ur', text: 'Urdu' },
];
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { t } = useTranslation();

  // const [lang, setLang] = useState('bn');

  // const handleChange = (e) => {
  //   setLang(e.target.value);
  //   let loc = 'http://localhost:3000/';
  //   window.location.replace(loc + '?lng=' + e.target.value);
  // };

  const logoutHandle = () => {
    dispatch(logout());
    navigate('/');
  };
  const id = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))._id
    : null;
  let link;
  let link2;

  // Google translate api
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        autoDisplay: false,
        layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
        layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
      },
      'google_translate_element'
    );
  };

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  if (!id) {
    link = (
      <ul className='action-list'>
        <li className='listing-button'>
          <Link to='/login' className='listing-btn'>
            <span className='item-text'>Login</span>
          </Link>
        </li>
      </ul>
    );
  } else {
    link = <i className='flaticon-user-1 icon-round'></i>;

    link2 = (
      <ul className='dropdown-menu-col-1'>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/listing'>Bookmarks</Link>
        </li>
        <li>
          <Link to='/schedule'>Scheduled Meetings</Link>
        </li>
        <li>
          <Link to='/scheduledmeetings'>Tours Scheduled</Link>
        </li>
        <li>
          <Link to='/' onClick={logoutHandle}>
            Log Out
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <div className='nav-head'>
      <header
        id='rt-header'
        className='rt-header sticky-on'
        style={{ transition: '0.3s ease' }}
      >
        <div
          id='navbar-wrap'
          className='header-menu menu-layout1 header-menu menu-layout2'
        >
          <div className='container nav-container'>
            <div className='row d-flex align-items-center'>
              <div className='col-xl-2 col-lg-2'>
                <div className='logo-area'>
                  <Link to='/' className='temp-logo'>
                    <img
                      src='img/logo.png'
                      width='157'
                      height='40'
                      alt='logo'
                      className='img-fluid'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-xl-5 col-lg-5 d-flex justify-content-center position-static'>
                <nav
                  id='dropdown'
                  className='template-main-menu template-main-menu-3'
                >
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/about'>About</Link>
                    </li>
                    <li>
                      <Link to='/pilgrimage'>Pilgrimages</Link>
                    </li>

                    <li>
                      <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className='col-xl-5 col-lg-5 g-0'>
                <div className='nav-links-wrapper d-flex align-items-center justify-content-end'>
                  <div className='header-action-layout1'>
                    <nav
                      id='dropdown'
                      className='template-main-menu template-main-menu-1'
                    >
                      <ul className='action-list'>
                        <li className='action-item-style my-account'>
                          {link}
                          {link2}
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className='header-action-layout1'>
                    <ul className='action-list'>
                      <li className='listing-button'>
                        <Link to='/donate' className='listing-btn'>
                          <span className='item-icon'>
                            <i className='fas fa-plus-circle'></i>
                          </span>
                          <span className='item-text'>Donate Now!</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div id='google_translate_element'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className='rt-header-menu mean-container position-relative'
        id='meanmenu'
      >
        <div className='mean-bar'>
          <Link to='/'>
            <img src='img/logo.png' alt='logo' className='img-fluid' />
          </Link>
          <div className='mean-bar--right'>
            <div className='actions user'>
              <Link to='/login'>
                <PersonIcon id='login-icon' />
              </Link>
            </div>

            <div className='sidebarBtn'>
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
