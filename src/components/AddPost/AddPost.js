import React, { useState } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProperty } from '../../store/actions/propertiesAction';
import { storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { ProgressBar, Button } from 'react-bootstrap';
import axios from "axios";


import ScrollButton from '../scrollToTop';
const AddPost = () => {
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
  const [formErrors, setFormErrors] = useState({});
  const [iImage, setiImage] = useState(null);
  const [iprogress, setIProgress] = useState(0);
  const [donation, setDonation] = useState('6241b6b33eee31225bec9285');
  const [amount, setAmount] = useState(0);
  const id = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))._id
    : null;
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) {
      navigate('/login');
    }
  });

  const fetchPropertyReducer = useSelector(
    (state) => state.fetchPropertyReducer
  );

  const { loading, error, propertiesData } = fetchPropertyReducer;

  // console.log(propertiesData);
  

  // console.log(propDetails);
  const dispatch = useDispatch();  
  
  const addPostHandler = async (e) => {
    e.preventDefault();

    await axios.post('https://vrtour-sih.herokuapp.com/api/bookings/checkout-session', {
      id: donation,
      amount: amount
    }).then(res => {
      console.log(res);
      console.log(res.data);
    })
    
    // const stripe = stripe(
    //   'pk_test_51J4Kz8SHGufhIZqgIWmxgdrE20A6C7svKlBCUFc4ojVdtQ9YuaUOhgpH7y3Jvtyw8Iv2f8Rbn3y6PBKZBn60EatG00Wk9mBTUk'
    // );
  
    // try {
    //   // 1. Get the checkout session from API
    //   const session = await axios(`/api/bookings/checkout-session/${donation}/${amount}`);
  
    //   // 2. Create checkout form + charge credit card
    //   await stripe.redirectToCheckout({
    //     sessionId: session.data.session.id,
    //   });
    // } catch (err) {
    //   console.log(err);      
    // }
  };
  // console.log(propDetails);  
  // const iImageHanlder = () => {
  //   const storageRef = ref(storage, `property/${iImage.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, iImage);

  //   uploadTask.on(
  //     'state_changed',
  //     (snapshot) => {
  //       const prog = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setIProgress(prog);
  //     },
  //     (error) => console.log(error),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         // setUserImage(downloadURL)
  //         setpropDetails((prev) => {
  //           return { ...prev, propertyImage: downloadURL };
  //         });
  //       });
  //     }
  //   );
  // };
  return (
    <div>
      <Navbar />

      <div class='breadcrumb-wrap'>
        {/* <div class='breadcrumb-wrap'>
          <div class='container'>
            <nav aria-label='breadcrumb'>
              <ol class='breadcrumb'>
                <li class='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li class='breadcrumb-item active' aria-current='page'>
                  Post Property
                </li>
              </ol>
            </nav>
          </div>
        </div> */}

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src='img/banner/donationbg.jpg' style={{ width: '100%' }} />
          <h1
            style={{
              position: 'absolute',
              top: '50%',
              fontFamily: 'Quentin',
              fontSize: '100px',
              lineHeight: '130px',
              color: '#dceeea',
              pointerEvents: 'none',
            }}
          >
            <span class='background-title solid'>Donate Now</span>
          </h1>
        </div>

        <main class='site-main content-area'>
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
            <div class='row'>
              <div class='col-lg-12 col-sm-12 col-12'>
                <div class='page-content-block'>
                  <div class='col-md-12 rtcl-login-form-wrap'>
                    <form
                      id='postadd'
                      class='form-horizontal'
                      onSubmit={addPostHandler}
                    >
                      <div class='form-group'>
                        <label htmlFor='addcategory' class='control-label'>
                          Pilgrimage
                          <strong class='rtcl-required'>*</strong>
                        </label>
                        <select
                          class='form-select'
                          aria-label='addcategory'
                          onChange={(e) => {
                            setDonation(e.target.value);
                            // console.log(donation);
                          }}
                        >                          
                          {
                            propertiesData?.map((currEle, i) => {
                              return (
                              <option value={currEle._id}>{currEle.title}</option>
                              )                              
                            })
                          }
                          {/* <option value='1'>Akshardham</option>
                          <option value='2'>Golden Temple</option>
                          <option value='3'>Lotus Temple</option>
                          <option value='4'>Shimla Christ Church</option>
                          <option value='5'>Soumnath Temple</option>
                          <option value='6'>Tirupati Balaji</option>
                          <option value='7'>Vaishno Devi</option> */}
                        </select>
                      </div>

                      <div class='form-group'>
                        <label htmlFor='addtype' class='control-label'>
                          Amount
                          <strong class='rtcl-required'>*</strong>
                        </label>
                        <div
                          style={{
                            position: 'absolute',
                            height: '38px',
                            width: '38px',
                            background: '#CED4DA',
                            color: '#000',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopLeftRadius: '4px',
                            borderBottomLeftRadius: '4px',
                          }}
                        >
                          ₹
                        </div>
                        <input
                          type='text'
                          aria-label='addtype'
                          style={{
                            width: '100%',
                            height: '38px',
                            border: '1px solid #CED4DA',
                            padding: '0 50px',
                            borderRadius: '4px',
                          }}
                          onChange = {(e) => {
                            setAmount(e.target.value);
                          }}
                        ></input>
                      </div>
                      <div
                        // class='submit-button'
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '30px',
                        }}
                      >
                        <button
                          style={{
                            width: '200px',
                            background: '#f58f3c',
                            color: 'white',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '5px',
                            height: '50px',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                          }}
                        >
                          Donate
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </main>
        <ScrollButton scrollState={scrollState} />

        <Footer />
      </div>
    </div>
  );
};
export default AddPost;
