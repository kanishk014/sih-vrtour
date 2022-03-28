import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/userActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandle = () => {
    dispatch(logout());
    navigate('/');
  };
  const id = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))._id
    : null;
  let link;
  let link2;
  if (!id) {
    link = (
      <ul class='action-list'>
        <li class='listing-button'>
          <Link to='/login' class='listing-btn'>
            <span class='item-text'>Login</span>
          </Link>
        </li>
      </ul>
    );
  } else {
    link = <i class='flaticon-user-1 icon-round'></i>;

    link2 = (
      <ul class='dropdown-menu-col-1'>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/listing'>My Listings</Link>
        </li>
        <li>
          <Link to='/schedule'>Created Meetings</Link>
        </li>
        <li>
          <Link to='/scheduledmeetings'>Meetings Scheduled</Link>
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
      {' '}
      <header class='rt-header sticky-on'>
        <div id='sticky-placeholder'></div>
        <div
          id='navbar-wrap'
          class='header-menu menu-layout1 header-menu menu-layout2'
        >
          <div class='container nav-container'>
            <div class='row d-flex align-items-center'>
              <div class='col-xl-2 col-lg-2'>
                <div class='logo-area'>
                  <Link to='/' class='temp-logo'>
                    <img
                      src='img/logo.png'
                      width='157'
                      height='40'
                      alt='logo'
                      class='img-fluid'
                    />
                  </Link>
                </div>
              </div>
              <div class='col-xl-6 col-lg-6 d-flex justify-content-center position-static'>
                <nav
                  id='dropdown'
                  class='template-main-menu template-main-menu-3'
                >
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/about'>About</Link>
                    </li>
                    <li>
                      <a>Property</a>
                      <ul class='dropdown-menu-col-1'>
                        <li>
                          <a href='/properties?category=buy'>Buy</a>
                        </li>
                        <li>
                          <a href='/properties?category=rent'>Rent</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                      <Link to='/contactus'>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class='col-xl-2 col-lg-2 g-0 d-flex justify-content-end'>
                <div class='header-action-layout1'>
                  <nav
                    id='dropdown'
                    class='template-main-menu template-main-menu-1'
                  >
                    <ul class='action-list'>
                      <li class='action-item-style my-account'>
                        {link}
                        {link2}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class='col-xl-2 col-lg-2 g-0 d-flex justify-content-end'>
                <div class='header-action-layout1'>
                  <ul class='action-list'>
                    <li class='listing-button'>
                      <Link to='/AddPost' class='listing-btn'>
                        <span>
                          <i class='fas fa-plus-circle'></i>
                        </span>
                        <span class='item-text'>Add Property</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
              <Link to='/'>
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
        <div class='rt-slide-nav'>
          <div class='offscreen-navigation'>
            <nav class='menu-main-primary-container'>
              <ul class='menu'>
                <li class='list menu-item-parent menu-item-has-children'>
                  <Link class='animation' to='/'>
                    Home
                  </Link>
                  <ul class='main-menu__dropdown sub-menu'>
                    <li>
                      <Link to='/'>Home </Link>
                    </li>
                  </ul>
                </li>
                <li class='list menu-item-parent menu-item-has-children'>
                  <Link class='animation' to='/listing'>
                    Listing
                  </Link>
                  <ul class='main-menu__dropdown sub-menu'>
                    <li>
                      <Link to='/Properties'>Properties Map Grid</Link>
                    </li>

                    <li>
                      <Link to='/SingleProperty'>Single Property 1</Link>
                    </li>
                  </ul>
                </li>
                <li class='list menu-item-parent menu-item-has-children'>
                  <Link class='animation' to='/'>
                    Pages
                  </Link>
                  <ul class='main-menu__dropdown sub-menu'>
                    <li>
                      <Link to='/about'>About Us</Link>
                    </li>
                  </ul>
                </li>
                <li class='list menu-item-parent menu-item-has-children'>
                  <Link class='animation' to='/'>
                    Blog
                  </Link>
                </li>
                <li class='list menu-item-parent menu-item-has-children'>
                  <Link class='animation' to='/'>
                    Agents
                  </Link>
                  <ul class='main-menu__dropdown sub-menu'></ul>
                </li>
                <li class='list menu-item-parent'>
                  <Link class='animation' to='ConactUs'>
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
