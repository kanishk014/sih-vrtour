import React from 'react';
import './Admin.css';
import $ from 'jquery';
import AddProperty from './AddProperty';

function Admin() {
  const mobileBreakpoint = window.matchMedia('(max-width: 991px )');

  $(document).ready(function () {
    $('.dash-nav-dropdown-toggle').click(function () {
      $(this)
        .closest('.dash-nav-dropdown')
        .toggleClass('show')
        .find('.dash-nav-dropdown')
        .removeClass('show');

      $(this).parent().siblings().removeClass('show');
    });

    $('.menu-toggle').click(function () {
      if (mobileBreakpoint.matches) {
        $('.dash-nav').toggleClass('mobile-show');
      } else {
        $('.dash').toggleClass('dash-compact');
      }
    });

    $('.searchbox-toggle').click(function () {
      $('.searchbox').toggleClass('show');
    });

    // Dev utilities
    // $("header.dash-toolbar .menu-toggle").click();
    // $(".searchbox-toggle").click();
  });

  return (
    <div>
      <div className='dash'>
        <div className='dash-nav dash-nav-dark'>
          <header>
            <a href='' className='menu-toggle'>
              <i className='fas fa-bars'></i>
            </a>
            <a href='' className='easion-logo'>
              <i className='fas fa-sun'></i> <span>Admin</span>
            </a>
          </header>
          <nav className='dash-nav-list'>
            <a href='' className='dash-nav-item'>
              <i className='fas fa-home'></i> Dashboard{' '}
            </a>
            <div className='dash-nav-dropdown'>
              <a href='' className='dash-nav-item dash-nav-dropdown-toggle'>
                <i className='fas fa-chart-bar'></i> Charts{' '}
              </a>
              <div className='dash-nav-dropdown-menu'>
                <a href='chartjs.html' className='dash-nav-dropdown-item'>
                  Chart.js
                </a>
              </div>
            </div>
            <div className='dash-nav-dropdown '>
              <a href='' className='dash-nav-item dash-nav-dropdown-toggle'>
                <i className='fas fa-cube'></i> Components{' '}
              </a>
              <div className='dash-nav-dropdown-menu'>
                <a href='cards.html' className='dash-nav-dropdown-item'>
                  Cards
                </a>
                <a href='forms.html' className='dash-nav-dropdown-item'>
                  Forms
                </a>
                <div className='dash-nav-dropdown '>
                  <a
                    href=''
                    className='dash-nav-dropdown-item dash-nav-dropdown-toggle'
                  >
                    Icons
                  </a>
                  <div className='dash-nav-dropdown-menu'>
                    <a href='icons.html' className='dash-nav-dropdown-item'>
                      Solid Icons
                    </a>
                    <a
                      href='icons.html#regular-icons'
                      className='dash-nav-dropdown-item'
                    >
                      Regular Icons
                    </a>
                    <a
                      href='icons.html#brand-icons'
                      className='dash-nav-dropdown-item'
                    >
                      Brand Icons
                    </a>
                  </div>
                </div>
                <a href='stats.html' className='dash-nav-dropdown-item'>
                  Stats
                </a>
                <a href='tables.html' className='dash-nav-dropdown-item'>
                  Tables
                </a>
                <a href='typography.html' className='dash-nav-dropdown-item'>
                  Typography
                </a>
                <a href='userinterface.html' className='dash-nav-dropdown-item'>
                  User Interface
                </a>
              </div>
            </div>
            <div className='dash-nav-dropdown'>
              <a href='' className='dash-nav-item dash-nav-dropdown-toggle'>
                <i className='fas fa-file'></i> Layouts{' '}
              </a>
              <div className='dash-nav-dropdown-menu'>
                <a href='blank.html' className='dash-nav-dropdown-item'>
                  Blank
                </a>
                <a href='content.html' className='dash-nav-dropdown-item'>
                  Content
                </a>
                <a href='login.html' className='dash-nav-dropdown-item'>
                  Log in
                </a>
                <a href='signup.html' className='dash-nav-dropdown-item'>
                  Sign up
                </a>
              </div>
            </div>
            <div className='dash-nav-dropdown'>
              <a href='' className='dash-nav-item dash-nav-dropdown-toggle'>
                <i className='fas fa-info'></i> About{' '}
              </a>
              <div className='dash-nav-dropdown-menu'>
                <a href='' target='_blank' className='dash-nav-dropdown-item'>
                  GitHub
                </a>
                <a
                  href='https://usebootstrap.com/theme/easion'
                  target='_blank'
                  className='dash-nav-dropdown-item'
                >
                  UseBootstrap
                </a>
                <a
                  href='https://mudimedia.com'
                  target='_blank'
                  className='dash-nav-dropdown-item'
                >
                  Mudimedia Software
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className='dash-app'>
          <header className='dash-toolbar'>
            <a href='' className='menu-toggle'>
              <i className='fas fa-bars'></i>
            </a>
            <a href='' className='searchbox-toggle'>
              <i className='fas fa-search'></i>
            </a>
            <form className='searchbox' action='#!'>
              <a href='' className='searchbox-toggle'>
                {' '}
                <i className='fas fa-arrow-left'></i>{' '}
              </a>
              <button type='submit' className='searchbox-submit'>
                <i className='fas fa-search'></i>
              </button>
            </form>
            <div className='tools'>
              <a href='' target='_blank' className='tools-item'>
                <i className='fab fa-github'></i>
              </a>
              <a href='' className='tools-item'>
                <i className='fas fa-bell'></i>
                <i className='tools-item-count'>4</i>
              </a>
              <div className='dropdown tools-item'>
                <a
                  href=''
                  className=''
                  id='dropdownMenu1'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <i className='fas fa-user'></i>
                </a>
                <div
                  className='dropdown-menu dropdown-menu-right'
                  aria-labelledby='dropdownMenu1'
                >
                  <a className='dropdown-item' href=''>
                    Profile
                  </a>
                  <a className='dropdown-item' href='login.html'>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </header>

          <AddProperty />
        </div>
      </div>
    </div>
  );
}

export default Admin;
