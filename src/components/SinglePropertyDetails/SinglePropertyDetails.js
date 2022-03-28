import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import './SinglePropertyDetails?.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchPropertyDetails } from '../../store/actions/propertiesAction';
import { fetchUserData } from '../../store/actions/userActions';
import ScrollButton from '../scrollToTop';
const SingleProperty = () => {
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
  const dispatch = useDispatch();
  const [id, setId] = useState(window.location.search.split('=')[1]);
  const fetchPropertyDetailsReducer = useSelector(
    (state) => state.fetchPropertyDetailsReducer
  );

  const userDataReducer = useSelector((state) => state.userDataReducer);
  const { loading: userLoading, userData } = userDataReducer;
  const { loading, propertyDetails, success } = fetchPropertyDetailsReducer;
  useEffect(() => {
    dispatch(fetchPropertyDetails(id));
  }, [dispatch]);
  useEffect(() => {
    if (success) {
      dispatch(fetchUserData(propertyDetails?.userId));
    }
  }, [success, dispatch]);
  // console.log(propertyDetails);
  return (
    <div>
      <Navbar />

      {/* <!--=====================================-->
      <!--=   Breadcrumb     Start            =-->
      <!--=====================================--> */}

      <div class='breadcrumb-wrap'>
        <div class='container'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link to='/'>Home</Link>
              </li>
              <li class='breadcrumb-item'>
                <Link to='/singlelisting'>Comercial Property</Link>
              </li>
              <li class='breadcrumb-item active' aria-current='page'>
                All Listing
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!--=====================================-->
      <!--=   Single Listing     Start        =-->
      <!--=====================================--> */}

      <section class='single-listing-wrap1'>
        {loading ? (
          <div
            class='container-fluid'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
              marginBottom: '40x',
            }}
          >
            <img src='img/preloader.gif' alt='load' />
          </div>
        ) : (
          <div class='container'>
            <div class='single-property'>
              <div class='content-wrapper'>
                <div class='property-heading'>
                  <div class='row'>
                    <div class='col-lg-6 col-md-12'>
                      <div class='single-list-cate'>
                        <div class='item-categoery'>Temple</div>
                      </div>
                    </div>
                    <div class='col-lg-6 col-md-12'>
                      <div class='single-list-price'>
                        <div class='heading-button'>
                          <Link
                            to='/singlelisting'
                            class='heading-btn item-btn2'
                          >
                            Book Ticket
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='row align-items-center'>
                    <div class='col-lg-8 col-md-12'>
                      <div class='single-verified-area'>
                        <div class='item-title'>
                          <h3>
                            <Link to='/singlelisting'>
                              Family House For Rent
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div class='single-item-address'>
                        <ul>
                          <li>
                            <i class='fas fa-map-marker-alt'></i>
                            {propertyDetails?.location}
                          </li>
                          <li>
                            <i class='fas fa-clock'></i>7 months ago /
                          </li>
                          <li>
                            <i class='fas fa-eye'></i>Views: 1,230
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-lg-12'>
                    <div id='panorama'>
                      <iframe
                        width='745'
                        height='600'
                        title='map'
                        allowFullScreen
                        style={{ borderStyle: 'none', width: '100%' }}
                        // src={
                        //   propertyDetails?.feel_360
                        //     ? propertyDetails?.feel_360
                        //     : "https://www.airpano.com/embed.php?3D=akshardham-india"
                        // }
                        src={
                          'https://www.airpano.com/embed.php?3D=akshardham-india'
                        }
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-lg-8'>
                    <div class='single-listing-box1'>
                      <div class='overview-area single-details-box table-responsive'>
                        <h3 class='item-title'>Overview</h3>
                        <table class='table-box1'>
                          <tbody>
                            <tr>
                              <td class='item-bold'>Id No</td>
                              <td> {propertyDetails?._id?.slice(1, 5)}</td>
                              <td class='item-bold'>Ticket Price</td>
                              <td>Rs.{propertyDetails?.price}</td>
                            </tr>
                            <tr>
                              <td class='item-bold'>Type</td>
                              <td>{propertyDetails?.type}</td>
                              <td class='item-bold'>Parking</td>
                              <td>
                                {propertyDetails?.parkingSpaces > 0
                                  ? 'Yes'
                                  : 'No'}
                              </td>
                            </tr>
                            <tr>
                              <td class='item-bold'>Timings</td>
                              <td>{propertyDetails?.timings}</td>
                              <td class='item-bold'>Aarti Time</td>
                              <td>{propertyDetails?.aartiTime}</td>
                            </tr>
                            <tr>
                              <td class='item-bold'>Tour Time</td>
                              <td>{propertyDetails?.tourTime}</td>
                              <td class='item-bold'>Land Area</td>
                              <td>{propertyDetails?.landArea}</td>
                            </tr>
                            <tr>
                              <td class='item-bold'>Size</td>
                              <td>{propertyDetails?.sqft} sqft</td>
                              <td class='item-bold'>Year Build</td>
                              <td>
                                {propertyDetails?.builtYear
                                  ? propertyDetails?.builtYear
                                  : 2019}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class='overview-area listing-area'>
                        <h3 class='item-title'>About This Place</h3>
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
                          great sages of Hinduism.
                          {propertyDetails?.about}
                        </p>
                        {/* <p>
                          The traditionally-styled complex was inaugurated on 6
                          November 2005 with the blessings of HH Pramukh Swami
                          Maharaj and through the devoted efforts of skilled
                          artisans and volunteers.
                        </p> */}
                      </div>
                      <div class='overview-area listing-area'>
                        <h3 class='item-title'>Facts and Figures</h3>
                        <p>
                          Opened 6th November 2005 Constructed by Bochasanwasi
                          Shri Akshar Purushottam Swaminarayan Sanstha (BAPS)
                          Inspired by HH Yogiji Maharaj (1892-1971 CE) Created
                          by His Holiness Pramukh Swami Maharaj More than
                          300,000,000 volunteer hours went into making the
                          complex Over 8,000 volunteers from across the world
                          participated in building it Mandir built from
                          intricately carved sandstone and marble Exhibitions on
                          Hinduism, including Bhagwan Swaminarayan's life and
                          teachings such as prayer, compassion, and
                          non-violence. Open gardens, water bodies and step-well
                          styled courtyard
                          {propertyDetails?.factsAndFigures}
                        </p>
                      </div>
                      <div class='overview-area listing-area'>
                        <h3 class='item-title'>Why is it famous?</h3>
                        <p>
                          Praesent eros turpis, commodo vel justo at, pulvinar
                          mollis eros. Mauris aliquet eu quam id ornareor bi ac
                          quam enim. Cras vitae nulla condimentum, semper dolor
                          non, faucibus dolor. Vivamus adip iscing eros quis
                          orci fringilla, sed pretium lectus viverra.
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas.
                          {propertyDetails?.famous}
                        </p>
                      </div>

                      <div class='overview-area ameniting-box'>
                        <h3 class='item-title'>Features {'&'} Activites</h3>
                        <div class='row'>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>TV Cable
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>Air Conditioning
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>Barbeque
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>Gym
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>Swimming Pool
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>Laundry
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>Microwave
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>Lawn
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>Sauna
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>CC Camera
                          </div>
                          <div class='col-lg-4 ameniting-list'>
                            <i class='fas fa-check-circle'></i>Window
                          </div>
                        </div>
                      </div>
                      <div class='overview-area map-box'>
                        <h3 class='item-title'>Map Location</h3>
                        <div class='item-map'>
                          <iframe
                            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.942936504207!2d90.42287424999999!3d23.774618500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1640231732625!5m2!1sen!2sbd'
                            width='731'
                            height='349'
                            title='map'
                            style={{ border: '0', width: '100%' }}
                            allowFullScreen=''
                            loading='lazy'
                          ></iframe>
                        </div>
                      </div>
                      {/* <div class="overview-area floor-plan-box">
												<h3 class="item-title">Floor Plans</h3>
												<div id="accordion" class="accordion">
													<div class="card">
														<div class="card-header">
															<div
																class="heading-title"
																data-bs-toggle="collapse"
																data-bs-target="#collapseOne"
																aria-expanded="true"
																role="button"
															>
																<span>First Floor Plan</span>
																<div class="card-list">
																	<ul>
																		<li>
																			<i class="flaticon-bed"></i>
																			<span>Beds: 03</span>
																		</li>
																		<li>
																			<i class="flaticon-shower"></i>
																			<span>Baths: 02</span>
																		</li>
																		<li>
																			<i class="flaticon-two-overlapping-square"></i>
																			<span>931Sqft</span>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div
															id="collapseOne"
															class="collapse show"
															data-bs-parent="#accordion"
														>
															<div class="card-body">
																<div class="item-img">
																	<img
																		src="img/figure/floor_plan.jpg"
																		alt="shape"
																	/>
																</div>
															</div>
														</div>
													</div>
													<div class="card">
														<div class="card-header">
															<div
																class="heading-title collapsed"
																data-bs-toggle="collapse"
																data-bs-target="#headingtwo"
																aria-expanded="true"
																role="button"
															>
																<span>Second Floor Plan</span>
																<div class="card-list">
																	<ul>
																		<li>
																			<i class="flaticon-bed"></i>
																			<span>Beds: 03</span>
																		</li>
																		<li>
																			<i class="flaticon-shower"></i>
																			<span>Baths: 02</span>
																		</li>
																		<li>
																			<i class="flaticon-two-overlapping-square"></i>
																			<span>931Sqft</span>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div
															id="headingtwo"
															class="collapse"
															data-bs-parent="#accordion"
														>
															<div class="card-body">
																<div class="item-img">
																	<img
																		src="img/figure/floor_plan.jpg"
																		alt="shape"
																	/>
																</div>
															</div>
														</div>
													</div>
													<div class="card">
														<div class="card-header">
															<div
																class="heading-title collapsed"
																data-bs-toggle="collapse"
																data-bs-target="#headingthree"
																aria-expanded="true"
																role="button"
															>
																<span>Third Floor Plan</span>
																<div class="card-list">
																	<ul>
																		<li>
																			<i class="flaticon-bed"></i>
																			<span>Beds: 03</span>
																		</li>
																		<li>
																			<i class="flaticon-shower"></i>
																			<span>Baths: 02</span>
																		</li>
																		<li>
																			<i class="flaticon-two-overlapping-square"></i>
																			<span>931Sqft</span>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div
															id="headingthree"
															class="collapse"
															data-bs-parent="#accordion"
														>
															<div class="card-body">
																<div class="item-img">
																	<img
																		src="img/figure/floor_plan.jpg"
																		alt="shape"
																	/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div> */}
                      <div class='overview-area video-box1'>
                        <h3 class='item-title'>Video</h3>
                        <div class='item-img'>
                          <img
                            src='img/blog/listing1.jpg'
                            alt='map'
                            width='731'
                            height='349'
                          />
                          <div class='play-button'>
                            <div class='item-icon'>
                              <a
                                href='http://www.youtube.com/watch?v=1iIZeIy7TqM'
                                class='play-btn play-btn-big'
                              >
                                <span class='play-icon style-2'>
                                  <i class='fas fa-play'></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='overview-area nearby-area'>
                        <h3 class='item-title'>Kalamridha Nearby Places</h3>
                        <div class='nearby-box'>
                          <div class='media d-flex'>
                            <div class='flex-shrink-0'>
                              <div class='item-icon'>
                                <i class='fas fa-heartbeat'></i>
                              </div>
                            </div>
                            <div class='media-body flex-grow-1 ms-3'>
                              <h4 class='small-title'>Health & Medical</h4>
                              <div class='row'>
                                <div class='col-lg-8'>
                                  <ul>
                                    <li>
                                      Born Knowing Birth and Lactation Support
                                      (12.61 miles)
                                    </li>
                                    <li>
                                      Tapestry Birth Collective (14.38 miles)
                                    </li>
                                    <li>
                                      Susan Cutter Healing Arts (7.75 miles)
                                    </li>
                                  </ul>
                                </div>
                                <div class='col-lg-4'>
                                  <div class='rating-area'>
                                    <ul class='item-rating'>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div class='item-number'>(05 Reviews)</div>
                                  </div>
                                  <div class='rating-area'>
                                    <ul class='item-rating'>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div class='item-number'>(05 Reviews)</div>
                                  </div>
                                  <div class='rating-area'>
                                    <ul class='item-rating'>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div class='item-number'>(05 Reviews)</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class='nearby-box nearby-box-2'>
                          <div class='media d-flex'>
                            <div class='flex-shrink-0'>
                              <div class='item-icon'>
                                <i class='fas fa-utensils'></i>
                              </div>
                            </div>
                            <div class='media-body flex-grow-1 ms-3'>
                              <h4 class='small-title'>Restaurants</h4>
                              <div class='row'>
                                <div class='col-lg-8'>
                                  <ul>
                                    <li>
                                      Born Knowing Birth and Lactation Support
                                      (12.61 miles)
                                    </li>
                                    <li>
                                      Tapestry Birth Collective (14.38 miles)
                                    </li>
                                    <li>
                                      Susan Cutter Healing Arts (7.75 miles)
                                    </li>
                                  </ul>
                                </div>
                                <div class='col-lg-4'>
                                  <div class='rating-area'>
                                    <ul class='item-rating'>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div class='item-number'>(05 Reviews)</div>
                                  </div>
                                  <div class='rating-area'>
                                    <ul class='item-rating'>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div class='item-number'>(05 Reviews)</div>
                                  </div>
                                  <div class='rating-area'>
                                    <ul class='item-rating'>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div class='item-number'>(05 Reviews)</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class='nearby-box nearby-box-3'>
                          <div class='media d-flex'>
                            <div class='flex-shrink-0'>
                              <div class='item-icon'>
                                <i class='fas fa-graduation-cap'></i>
                              </div>
                            </div>
                            <div class='media-body flex-grow-1 ms-3'>
                              <h4 class='small-title'>Education</h4>
                              <div class='row'>
                                <div class='col-lg-8'>
                                  <ul>
                                    <li>
                                      Born Knowing Birth and Lactation Support
                                      (12.61 miles)
                                    </li>
                                    <li>
                                      Tapestry Birth Collective (14.38 miles)
                                    </li>
                                    <li>
                                      Susan Cutter Healing Arts (7.75 miles)
                                    </li>
                                  </ul>
                                </div>
                                <div class='col-lg-4'>
                                  <div class='rating-area'>
                                    <ul class='item-rating'>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div class='item-number'>(05 Reviews)</div>
                                  </div>
                                  <div class='rating-area'>
                                    <ul class='item-rating'>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div class='item-number'>(05 Reviews)</div>
                                  </div>
                                  <div class='rating-area'>
                                    <ul class='item-rating'>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i class='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div class='item-number'>(05 Reviews)</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='product-video' style={{ overflow: 'hidden' }}>
                        <h3 class='item-title'>Gallery</h3>
                        <div
                          class='featured-thumb-slider-area wow fadeInUp'
                          data-wow-delay='.4s'
                        >
                          <div class='feature-box3 swiper-container'>
                            <Swiper
                              autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                              }}
                              slidesPerView={1}
                              // spaceBetween={40}
                              centeredSlides={true}
                              loop={true}
                              modules={[Autoplay]}
                              className='mySwiper'
                            >
                              <SwiperSlide class='swiper-slide width-swiper '>
                                <div class='feature-img1 zoom-image-hover'>
                                  <img
                                    src='img/blog/product1-1.jpg'
                                    alt='feature'
                                    // width="798"
                                    // height="420"
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide class='swiper-slide width-swiper'>
                                <div class='feature-img1 zoom-image-hover'>
                                  <img
                                    src='img/blog/product3.jpg'
                                    alt='feature'
                                    // width="798"
                                    // height="420"
                                  />
                                </div>
                              </SwiperSlide>

                              <SwiperSlide class='swiper-slide width-swiper'>
                                <div class='feature-img1 zoom-image-hover'>
                                  <img
                                    src='img/blog/product4.jpg'
                                    alt='feature'
                                    // width="798"
                                    // height="420"
                                  />
                                </div>
                              </SwiperSlide>

                              <SwiperSlide class='swiper-slide width-swiper'>
                                <div class='feature-img1 zoom-image-hover'>
                                  <img
                                    src='img/blog/product5.jpg'
                                    alt='feature'
                                    // width="798"
                                    // height="420"
                                  />
                                </div>
                              </SwiperSlide>

                              <SwiperSlide class='swiper-slide width-swiper'>
                                <div class='feature-img1 zoom-image-hover'>
                                  <img
                                    src='img/blog/product6.jpg'
                                    alt='feature'
                                    // width="798"
                                    // height="420"
                                  />
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='col-lg-4 widget-break-lg sidebar-widget'>
                    {userLoading ? (
                      <div
                        class='container-fluid'
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: '20px',
                          marginBottom: '40x',
                        }}
                      >
                        <img src='img/preloader.gif' alt='load' />
                      </div>
                    ) : (
                      <div class='widget widget-contact-box'>
                        <h3 class='widget-subtitle'>Contact Tour Guide</h3>
                        <div class='media d-flex'>
                          <div
                            class='flex-shrink-0'
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div class='item-logo'>
                              <img
                                src='img/logo.png'
                                alt='logo'
                                style={{ height: '50px' }}
                                width='100'
                                height='200'
                              />
                            </div>
                          </div>
                          <div class='media-body flex-grow-1 ms-3'>
                            <h4 class='item-title'>VRTOUR</h4>
                            <div class='item-phn'>
                              +91{' '}
                              {userData?.phoneno
                                ? userData?.phoneno
                                : 1234567890}
                              <Link to='/property'>
                                <span>(Show)</span>
                              </Link>
                            </div>
                            <div class='item-mail'>
                              {userData?.email
                                ? userData?.email
                                : 'info@vrtour.com'}
                            </div>
                            <div class='item-rating'>
                              <ul>
                                <li>
                                  <i class='fas fa-star'></i>
                                </li>
                                <li>
                                  <i class='fas fa-star'></i>
                                </li>
                                <li>
                                  <i class='fas fa-star'></i>
                                </li>
                                <li>
                                  <i class='fas fa-star'></i>
                                </li>
                                <li>
                                  <i class='fas fa-star'></i>
                                </li>
                                <li class='rating-count'>(Reviews 15)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <ul class='wid-contact-button'>
                          <li>
                            <Link
                              to={`/schedulemeeting?id=${propertyDetails?.userId}`}
                            >
                              <i class='fas fa-comment'></i>Schedule Meeting
                            </Link>
                          </li>
                        </ul>
                        <form class='contact-box rt-contact-form'>
                          <div class='row'>
                            <div class='form-group col-lg-12'>
                              <input
                                type='text'
                                class='form-control'
                                name='fname'
                                placeholder='Your Full Name'
                                data-error='First Name is required'
                                required
                              />
                            </div>
                            <div class='form-group col-lg-12'>
                              <input
                                type='text'
                                class='form-control'
                                name='phone'
                                placeholder='Phone'
                                data-error='Phone is required'
                                required
                              />
                            </div>
                            <div class='form-group col-lg-12'>
                              <input
                                type='text'
                                class='form-control'
                                name='phone'
                                placeholder='E-mail'
                                data-error='Phone is required'
                                required
                              />
                            </div>
                            <div class='form-group col-lg-12'>
                              <textarea
                                name='comment'
                                id='message'
                                class='form-text'
                                placeholder='Message'
                                cols='30'
                                rows='4'
                                data-error='Message Name is required'
                                required
                              ></textarea>
                            </div>
                            <div class='form-group col-lg-12'>
                              <div class='advanced-button'>
                                <button type='submit' class='item-btn'>
                                  Send Message <i class='fas fa-search'></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class='form-response'></div>
                        </form>
                      </div>
                    )}

                    <div class='widget widget-post'>
                      <div class='item-img'>
                        <img src='img/blog/widget5.jpg' alt='widget' />
                        <div class='circle-shape'>
                          <span class='item-shape'></span>
                        </div>
                      </div>
                      <div class='item-content'>
                        <h4 class='item-title'>Find Your Dream House</h4>
                        <div class='item-price'>$2,999</div>
                        <div class='post-button'>
                          <Link to='/singlelisting' class='item-btn'>
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* <!--=====================================-->
      <!--=   Property     Start              =-->
      <!--=====================================--> */}

      <section class='property-wrap1'>
        <div class='container'>
          <div class='row align-items-center'>
            <div class='col-lg-6 col-md-7 col-sm-7'>
              <div class='item-heading-left'>
                <span class='section-subtitle'>Our PROPERTIES</span>
                <h2 class='section-title'>Latest Properties</h2>
                <div class='bg-title-wrap' style={{ display: 'block' }}>
                  <span class='background-title solid'>Properties</span>
                </div>
              </div>
            </div>
            <div class='col-lg-6 col-md-5 col-sm-5'>
              <div class='heading-button'>
                <Link to='/singlelisting' class='heading-btn item-btn2'>
                  All Properties
                </Link>
              </div>
            </div>
          </div>
          <div class='row justify-content-center'>
            <div class='col-xl-4 col-lg-6 col-md-6'>
              <div
                class='property-box2 wow animated fadeInUp'
                data-wow-delay='.3s'
              >
                <div class='item-img'>
                  <Link to='/property'>
                    <img
                      src='img/blog/blog4.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div class='item-category-box1'>
                    <div class='item-category'>For Sell</div>
                  </div>
                  <div class='rent-price'>
                    <div class='item-price'>
                      $15,000
                      <span>
                        <i>/</i>mo
                      </span>
                    </div>
                  </div>
                </div>
                <div class='item-category10'>
                  <Link to='/property'>Appartment</Link>
                </div>
                <div class='item-content'>
                  <div class='verified-area'>
                    <h3 class='item-title'>
                      <Link to='/property'>Family House For Sell</Link>
                    </h3>
                  </div>
                  <div class='location-area'>
                    <i class='flaticon-maps-and-flags'></i>Downey, California
                  </div>
                  <div class='item-categoery3'>
                    <ul>
                      <li>
                        <i class='flaticon-bed'></i>Beds: 03
                      </li>
                      <li>
                        <i class='flaticon-shower'></i>Baths: 02
                      </li>
                      <li>
                        <i class='flaticon-two-overlapping-square'></i>931 Sqft
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-6 col-md-6'>
              <div
                class='property-box2 wow animated fadeInUp'
                data-wow-delay='.2s'
              >
                <div class='item-img'>
                  <Link to='/property'>
                    <img
                      src='img/blog/blog5.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div class='item-category-box1'>
                    <div class='item-category'>For Rent</div>
                  </div>
                  <div class='rent-price'>
                    <div class='item-price'>
                      $12,000
                      <span>
                        <i>/</i>mo
                      </span>
                    </div>
                  </div>
                </div>
                <div class='item-category10'>
                  <Link to='/property'>Villa</Link>
                </div>
                <div class='item-content'>
                  <div class='verified-area'>
                    <h3 class='item-title'>
                      <Link to='/property'>Countryside Modern Lake View</Link>
                    </h3>
                  </div>
                  <div class='location-area'>
                    <i class='flaticon-maps-and-flags'></i>Downey, California
                  </div>
                  <div class='item-categoery3'>
                    <ul>
                      <li>
                        <i class='flaticon-bed'></i>Beds: 03
                      </li>
                      <li>
                        <i class='flaticon-shower'></i>Baths: 02
                      </li>
                      <li>
                        <i class='flaticon-two-overlapping-square'></i>931 Sqft
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-6 col-md-6'>
              <div
                class='property-box2 wow animated fadeInUp'
                data-wow-delay='.1s'
              >
                <div class='item-img'>
                  <Link to='/property'>
                    <img
                      src='img/blog/blog6.jpg'
                      alt='blog'
                      width='510'
                      height='340'
                    />
                  </Link>
                  <div class='item-category-box1'>
                    <div class='item-category'>For Sell</div>
                  </div>
                  <div class='rent-price'>
                    <div class='item-price'>
                      $18,000
                      <span>
                        <i>/</i>mo
                      </span>
                    </div>
                  </div>
                </div>
                <div class='item-category10'>
                  <Link to='/property'>Office</Link>
                </div>
                <div class='item-content'>
                  <div class='verified-area'>
                    <h3 class='item-title'>
                      <Link to='/property'>Gorgeous Apartment Building </Link>
                    </h3>
                  </div>
                  <div class='location-area'>
                    <i class='flaticon-maps-and-flags'></i>Downey, California
                  </div>
                  <div class='item-categoery3'>
                    <ul>
                      <li>
                        <i class='flaticon-bed'></i>Beds: 03
                      </li>
                      <li>
                        <i class='flaticon-shower'></i>Baths: 02
                      </li>
                      <li>
                        <i class='flaticon-two-overlapping-square'></i>931 Sqft
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--=====================================-->
      <!--=   Newsletter     Start            =-->
      <!--=====================================--> */}

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

export default SingleProperty;
