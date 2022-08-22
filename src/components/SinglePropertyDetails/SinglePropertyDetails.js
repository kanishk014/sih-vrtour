import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import './SinglePropertyDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPropertyDetails } from '../../store/actions/propertiesAction';
import { fetchUserData } from '../../store/actions/userActions';
import ScrollButton from '../scrollToTop';
import VrpanoIcon from '@mui/icons-material/Vrpano';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useReactToPrint } from 'react-to-print';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SingleProperty = () => {
  const componentRef = useRef();
  const handlePrintPDF = useReactToPrint({
    content: () => componentRef.current,
  });
  //   const [ticketPrice, setTicketPrice] = useState('');
  const [fixedAmount, setFixedAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [nationality, setNationality] = useState('1');
  const [booking, setBooking] = useState({
    name: '',
    date: '',
    noOfPersons: Number,
  });

  const [printPdf, setPrintPdf] = useState(false);

  const userToken = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')).token
    : null;
  const navigate = useNavigate();
  useEffect(() => {
    if (!userToken) {
      window.location.replace('/login');
    }
  });

  // const { id } = useParams();

  useEffect(function () {
    axios
      .get(
        `https://vrtour-sih.herokuapp.com/api/property/getpropertydetails/${id}`
      )
      .then((res) => {
        setFixedAmount(res.data.price);
        setName(res.data.title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (totalAmount === '') {
    //   alert('Please enter amount');
    // } else {
    // alert(amount);
    var options = {
      key: 'rzp_test_3PxjsVZPtFxNvT',
      key_secret: ' 0yEihUuQkxQrslsr4661GMj4',
      amount: totalAmount * 100,
      currency: 'INR',
      name: 'VRTOUR',
      description: 'Ticket Price',
      handler: function () {
        bookTicketCall();
      },
      prefill: {
        name: 'VRTOUR Tester',
        email: 'vrtour@tester.com',
        contact: '9999108799',
      },
      notes: {
        address: 'VR Tour Office',
      },
      theme: {
        color: '#f58f3c',
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
    // }
  };

  const handleChange = (event) => {
    setBooking({
      ...booking,
      [event.target.name]: event.target.value,
    });
  };

  const personChange = (event) => {
    setTotalAmount(fixedAmount * event.target.value);
  };

  const selectChange = (event) => {
    setNationality(event.target.value);
  };

  const bookTicketCall = () => {
    axios
      .post(
        'https://vrtour-sih.herokuapp.com/api/ticketBooking/bookTicket',
        {
          name: booking.name,
          date: booking.date,
          mobileNo: phone,
          monumentId: id,
          noOfPersons: parseInt(booking.noOfPersons),
          nationality: parseInt(nationality),
          totalAmount: totalAmount,
        },
        {
          headers: {
            authorization: userToken,
          },
        }
      )
      .then((res) => {
        alert('Booking sucessful!');
        setPrintPdf(true);
      })
      .catch((err) => {
        alert('Can not book right now. Try again later');
      });
  };
  const [scrollState, setScrollState] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };
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

  // Modal
  const [show, setShow] = useState(false);
  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);

  return (
    <div>
      <Navbar />

      {/* <!--=====================================-->
      <!--=   Breadcrumb     Start            =-->
      <!--=====================================--> */}

      <div className='breadcrumb-wrap'>
        <div className='container'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='/'>Home</Link>
              </li>
              <li className='breadcrumb-item'>
                <Link to='/singlelisting'>Comercial Property</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                All Listing
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!--=====================================-->
      <!--=   Single Listing     Start        =-->
      <!--=====================================--> */}

      <section className='single-listing-wrap1'>
        {loading ? (
          <div
            className='container-fluid'
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
          <div className='container'>
            <div className='single-property'>
              <div className='content-wrapper'>
                <div className='property-heading'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                      <div className='single-list-cate'>
                        <div className='item-categoery'>
                          {propertyDetails?.type}
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                      <div className='single-list-price'>
                        <div onClick={modalShow} className='heading-button'>
                          <div
                            className='heading-btn item-btn2'
                            style={{ cursor: 'pointer' }}
                          >
                            Book Tickets
                          </div>
                        </div>
                        {/* <Container>
                          <Button onClick={openModal}>Book Ticket</Button>
                          <Modal
                            showModal={showModal}
                            setShowModal={setShowModal}
                          />
                          <GloablStyle />
                        </Container> */}
                        <div className='heading-button'>
                          <a
                            href={propertyDetails?.websiteUrl}
                            target='__blank'
                            className='heading-btn item-btn2'
                          >
                            Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Button variant='primary' onClick={modalShow}>
                    Launch demo modal
                  </Button> */}

                  <Modal
                    show={show}
                    onHide={modalClose}
                    keyboard={false}
                    aria-labelledby='contained-modal-title-vcenter'
                    centered
                    size='lg'
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        <div ref={componentRef} className='add-property'>
                          <h1>Book Tickets</h1>
                          <form
                            method='post'
                            // onSubmit={handleSubmit}
                          >
                            <div className='form-input'>
                              <h4>Name:</h4>
                              <input
                                type='text'
                                name='name'
                                placeholder='Enter name'
                                required
                                value={booking.name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='form-input'>
                              <h4>Date: </h4>
                              <input
                                type='date'
                                name='date'
                                placeholder='Enter date of visiting'
                                required
                                value={booking.date}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='form-input'>
                              <h4>Mobile Number:</h4>
                              <PhoneInput
                                placeholder='Enter phone number'
                                name='mobileNo'
                                required
                                value={phone}
                                onChange={setPhone}
                              />
                            </div>
                            <div className='form-input'>
                              <h4>Number of Person:</h4>
                              <input
                                type='number'
                                name='noOfPersons'
                                placeholder='Number of person visiting'
                                min='0'
                                required
                                value={booking.noOfPersons}
                                onChange={handleChange}
                                onInput={personChange}
                              />
                            </div>
                            <div className='form-input'>
                              <h4>Nationality:</h4>
                              <select
                                value={nationality}
                                onChange={selectChange}
                              >
                                <option value='none' selected disabled hidden>
                                  Select nationality
                                </option>
                                <option value='1'>Indian</option>
                                <option value='2'>Foreigner</option>
                              </select>
                            </div>
                            <div className='form-input'>
                              <h4>Total Amount: </h4>
                              <div className='total-amount'>
                                ₹ {totalAmount}
                              </div>
                            </div>
                            {/* </form> */}
                            <div className='print'>
                              <div className='submit-button'>
                                <button
                                  type='submit'
                                  onChange={(e) => {
                                    setTotalAmount(e.target.value);
                                  }}
                                  onClick={handleSubmit}
                                >
                                  Book Ticket
                                </button>
                              </div>
                              {printPdf ? (
                                <div className='submit-button'>
                                  <button
                                    type='button'
                                    onClick={handlePrintPDF}
                                  >
                                    Print PDF
                                  </button>
                                </div>
                              ) : (
                                ''
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                    </Modal.Body>
                    {/* <Modal.Footer>
                      <Button variant='secondary' onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant='primary' onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer> */}
                  </Modal>

                  <div className='row align-items-center'>
                    <div className='col-lg-8 col-md-12'>
                      <div className='single-verified-area'>
                        <div className='item-title'>
                          <h3>{propertyDetails?.title}</h3>
                        </div>
                      </div>
                      <div className='single-item-address'>
                        <ul>
                          <li>
                            <i className='fas fa-map-marker-alt'></i>
                            {propertyDetails?.address}
                          </li>
                          <li>
                            <i className='fas fa-clock'></i>7 months ago /
                          </li>
                          <li>
                            <i className='fas fa-eye'></i>Views: 1,230
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className='row'>
                  <div className='col-lg-12'>
                    <div id='panorama'>
                      <iframe
                        width='745'
                        height='600'
                        title='map'
                        allowFullScreen
                        style={{ borderStyle: 'none', width: '100%' }}
                        src={
                          propertyDetails?.feel360
                            ? propertyDetails?.feel360
                            : 'https://www.airpano.com/embed.php?3D=akshardham-india'
                        }
                      ></iframe>
                    </div>
                  </div>
                </div> */}

                {/* <Tabs
                  defaultActiveKey='360-img'
                  id='uncontrolled-tab-example'
                  className='mb-3'
                >
                  <Tab eventKey='360-img' title='360-img'>
                    
                  </Tab>
                  <Tab eventKey='vr-video' title='vr-video'>
                    
                  </Tab>
                </Tabs> */}

                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                  <Nav variant='pills' className='flex-column'>
                    <Nav.Item>
                      <Nav.Link eventKey='first'>
                        <VrpanoIcon /> 360° Image
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='second'>
                        <ThreeDRotationIcon /> VR Video
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey='first'>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <div id='panorama'>
                            <iframe
                              src={
                                propertyDetails?.feel360
                                  ? propertyDetails.feel360
                                  : 'https://sushantpatial.github.io/VR/egjs2.html'
                              }
                              width='100%'
                              height='600'
                              allowFullScreen
                              allowvr='yes'
                              allow='xr-spatial-tracking; vr; xr; accelerometer; magnetometer; gyroscope; webvr; webxr; encrypted-media; picture-in-picture'
                              title='Iframe Image'
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <div id='panorama'>
                            <iframe
                              src={
                                propertyDetails?.vrVideo
                                  ? propertyDetails.vrVideo
                                  : 'https://sushantpatial.github.io/VR/egjs.html'
                              }
                              width='100%'
                              height='600'
                              allowFullScreen
                              allowvr='yes'
                              allow='xr-spatial-tracking; vr; xr; accelerometer; magnetometer; gyroscope; webvr; webxr; encrypted-media; picture-in-picture'
                              title='Iframe Video'
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

                {/* <div className='col-lg-12'>
                    <div id='panorama'>
                      
                    </div>
                  </div>
                </div> */}

                <div className='row'>
                  <div className='col-lg-8'>
                    <div className='single-listing-box1'>
                      <div className='overview-area single-details-box table-responsive'>
                        <h3 className='item-title'>Overview</h3>
                        <table className='table-box1'>
                          <tbody>
                            <tr>
                              <td className='item-bold'>Id No</td>
                              <td> {propertyDetails?._id?.slice(1, 5)}</td>
                              <td className='item-bold'>Ticket Price</td>
                              {propertyDetails?.price == 0 ? (
                                <td>Free</td>
                              ) : (
                                <td>₹ {propertyDetails?.price}</td>
                              )}
                            </tr>
                            <tr>
                              <td className='item-bold'>Type</td>
                              <td>{propertyDetails?.type}</td>
                              <td className='item-bold'>Parking</td>
                              <td>
                                {propertyDetails?.parkingSpaces > 0
                                  ? 'Yes'
                                  : 'No'}
                              </td>
                            </tr>
                            <tr>
                              <td className='item-bold'>Timings</td>
                              <td>{propertyDetails?.timings}</td>
                              <td className='item-bold'>Aarti Time</td>
                              <td>{propertyDetails?.aartiTime}</td>
                            </tr>
                            <tr>
                              <td className='item-bold'>Tour Time</td>
                              <td>{propertyDetails?.tourTime}</td>
                              <td className='item-bold'>Land Area</td>
                              <td>{propertyDetails?.landArea} Acres</td>
                            </tr>
                            <tr>
                              <td className='item-bold'>Size</td>
                              <td>{propertyDetails?.sqft} sqft</td>
                              <td className='item-bold'>Year Build</td>
                              <td>
                                {propertyDetails?.builtYear
                                  ? propertyDetails?.builtYear
                                  : 2019}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className='overview-area listing-area'>
                        <h3 className='item-title'>About This Place</h3>
                        <p>{propertyDetails?.about}</p>
                      </div>
                      <div className='overview-area listing-area'>
                        <h3 className='item-title'>Facts and Figures</h3>
                        <p>{propertyDetails?.factsAndFigures}</p>
                      </div>
                      <div className='overview-area listing-area'>
                        <h3 className='item-title'>Why is it famous?</h3>
                        <p>{propertyDetails?.famous}</p>
                      </div>

                      <div className='overview-area ameniting-box'>
                        <h3 className='item-title'>Features {'&'} Activites</h3>
                        <div className='row'>
                          {propertyDetails?.activities.map((item, i) => {
                            return (
                              <div className='col-lg-4 ameniting-list' key={i}>
                                <i className='fas fa-check-circle'></i>
                                {item}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className='overview-area map-box'>
                        <h3 className='item-title'>Map Location</h3>
                        <div className='item-map'>
                          <iframe
                            src={
                              propertyDetails?.mapLocation
                                ? propertyDetails.mapLocation
                                : 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.942936504207!2d90.42287424999999!3d23.774618500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1640231732625!5m2!1sen!2sbd'
                            }
                            width='731'
                            height='349'
                            title='map'
                            style={{ border: '0', width: '100%' }}
                            allowFullScreen=''
                            loading='lazy'
                          ></iframe>
                        </div>
                      </div>

                      <div className='overview-area video-box1'>
                        <h3 className='item-title'>Video</h3>
                        <div className='item-img'>
                          <img
                            src={propertyDetails?.propertyImage}
                            alt='map'
                            width='731'
                            height='349'
                          />
                          <div className='play-button'>
                            <div className='item-icon'>
                              <a
                                href={propertyDetails?.video}
                                className='play-btn play-btn-big'
                              >
                                <span className='play-icon style-2'>
                                  <i className='fas fa-play'></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='overview-area nearby-area'>
                        <h3 className='item-title'>Kalamridha Nearby Places</h3>
                        <div className='nearby-box'>
                          <div className='media d-flex'>
                            <div className='flex-shrink-0'>
                              <div className='item-icon'>
                                <i className='fas fa-heartbeat'></i>
                              </div>
                            </div>
                            <div className='media-body flex-grow-1 ms-3'>
                              <h4 className='small-title'>Health & Medical</h4>
                              <div className='row'>
                                <div className='col-lg-8'>
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
                                <div className='col-lg-4'>
                                  <div className='rating-area'>
                                    <ul className='item-rating'>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div className='item-number'>
                                      (05 Reviews)
                                    </div>
                                  </div>
                                  <div className='rating-area'>
                                    <ul className='item-rating'>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div className='item-number'>
                                      (05 Reviews)
                                    </div>
                                  </div>
                                  <div className='rating-area'>
                                    <ul className='item-rating'>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div className='item-number'>
                                      (05 Reviews)
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='nearby-box nearby-box-2'>
                          <div className='media d-flex'>
                            <div className='flex-shrink-0'>
                              <div className='item-icon'>
                                <i className='fas fa-utensils'></i>
                              </div>
                            </div>
                            <div className='media-body flex-grow-1 ms-3'>
                              <h4 className='small-title'>Restaurants</h4>
                              <div className='row'>
                                <div className='col-lg-8'>
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
                                <div className='col-lg-4'>
                                  <div className='rating-area'>
                                    <ul className='item-rating'>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div className='item-number'>
                                      (05 Reviews)
                                    </div>
                                  </div>
                                  <div className='rating-area'>
                                    <ul className='item-rating'>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div className='item-number'>
                                      (05 Reviews)
                                    </div>
                                  </div>
                                  <div className='rating-area'>
                                    <ul className='item-rating'>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div className='item-number'>
                                      (05 Reviews)
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='nearby-box nearby-box-3'>
                          <div className='media d-flex'>
                            <div className='flex-shrink-0'>
                              <div className='item-icon'>
                                <i className='fas fa-graduation-cap'></i>
                              </div>
                            </div>
                            <div className='media-body flex-grow-1 ms-3'>
                              <h4 className='small-title'>Education</h4>
                              <div className='row'>
                                <div className='col-lg-8'>
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
                                <div className='col-lg-4'>
                                  <div className='rating-area'>
                                    <ul className='item-rating'>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div className='item-number'>
                                      (05 Reviews)
                                    </div>
                                  </div>
                                  <div className='rating-area'>
                                    <ul className='item-rating'>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div className='item-number'>
                                      (05 Reviews)
                                    </div>
                                  </div>
                                  <div className='rating-area'>
                                    <ul className='item-rating'>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                      <li>
                                        <i className='fas fa-star'></i>
                                      </li>
                                    </ul>
                                    <div className='item-number'>
                                      (05 Reviews)
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='product-video'
                        style={{ overflow: 'hidden' }}
                      >
                        <h3 className='item-title'>Gallery</h3>
                        <div
                          className='featured-thumb-slider-area wow fadeInUp'
                          data-wow-delay='.4s'
                        >
                          <div className='feature-box3 swiper-container'>
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
                              <SwiperSlide className='swiper-slide width-swiper '>
                                <div className='feature-img1 zoom-image-hover'>
                                  <img
                                    src={propertyDetails?.propertyImage}
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

                  <div className='col-lg-4 widget-break-lg sidebar-widget'>
                    {userLoading ? (
                      <div
                        className='container-fluid'
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
                      <div className='widget widget-contact-box'>
                        <h3 className='widget-subtitle'>Contact Tour Guide</h3>
                        <div className='media d-flex'>
                          <div
                            className='flex-shrink-0'
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div className='item-logo'>
                              <img
                                src='img/logo.png'
                                alt='logo'
                                style={{ height: '100px' }}
                                width='100'
                                height='200'
                              />
                            </div>
                          </div>
                          <div className='media-body flex-grow-1 ms-3'>
                            <h4 className='item-title'>VRTOUR</h4>
                            <div className='item-phn'>
                              +91{' '}
                              {userData?.phoneno
                                ? userData?.phoneno
                                : 1234567890}
                            </div>
                            <div className='item-mail'>
                              {userData?.email
                                ? userData?.email
                                : 'info@vrtour.com'}
                            </div>
                            <div className='item-rating'>
                              <ul>
                                <li>
                                  <i className='fas fa-star'></i>
                                </li>
                                <li>
                                  <i className='fas fa-star'></i>
                                </li>
                                <li>
                                  <i className='fas fa-star'></i>
                                </li>
                                <li>
                                  <i className='fas fa-star'></i>
                                </li>
                                <li>
                                  <i className='fas fa-star'></i>
                                </li>
                                <li className='rating-count'>(Reviews 15)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <ul className='wid-contact-button'>
                          <li>
                            <Link
                              to={`/schedulemeeting?id=${propertyDetails?.userId}`}
                            >
                              <i className='fas fa-comment'></i>Schedule Meeting
                            </Link>
                          </li>
                        </ul>
                        <form className='contact-box rt-contact-form'>
                          <div className='row'>
                            <div className='form-group col-lg-12'>
                              <input
                                type='text'
                                className='form-control'
                                name='fname'
                                placeholder='Your Full Name'
                                data-error='First Name is required'
                                required
                              />
                            </div>
                            <div className='form-group col-lg-12'>
                              <input
                                type='text'
                                className='form-control'
                                name='phone'
                                placeholder='Phone'
                                data-error='Phone is required'
                                required
                              />
                            </div>
                            <div className='form-group col-lg-12'>
                              <input
                                type='text'
                                className='form-control'
                                name='phone'
                                placeholder='E-mail'
                                data-error='Phone is required'
                                required
                              />
                            </div>
                            <div className='form-group col-lg-12'>
                              <textarea
                                name='comment'
                                id='message'
                                className='form-text'
                                placeholder='Message'
                                cols='30'
                                rows='4'
                                data-error='Message Name is required'
                                required
                              ></textarea>
                            </div>
                            <div className='form-group col-lg-12'>
                              <div className='advanced-button'>
                                <button type='submit' className='item-btn'>
                                  Send Message <i className='fas fa-search'></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className='form-response'></div>
                        </form>
                      </div>
                    )}
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

      <section className='property-wrap1'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-7 col-sm-7'>
              <div className='item-heading-left'>
                <h2 className='section-title'>Latest Destinations</h2>
                <div className='bg-title-wrap' style={{ display: 'block' }}>
                  <span className='background-title solid'>Destinations</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-5 col-sm-5'>
              <div className='heading-button'>
                <Link to='/pilgrimage' className='heading-btn item-btn2'>
                  All Sites
                </Link>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
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
          </div>
        </div>
      </section>
      {/* <!--=====================================-->
      <!--=   Newsletter     Start            =-->
      <!--=====================================--> */}

      <section className='newsletter-wrap1'>
        <div className='shape-img1'>
          <img
            src='img/figure/shape13.png'
            alt='figure'
            width='356'
            height='130'
          />
        </div>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className='newsletter-layout1'>
                <div className='item-heading'>
                  <h2 className='item-title'>Sign up for newsletter</h2>
                  <h3 className='item-subtitle'>Get latest news and update</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='newsletter-form'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter e-mail addess'
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-outline-secondary' type='button'>
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
