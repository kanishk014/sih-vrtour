import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Booking.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useReactToPrint } from 'react-to-print';

const Booking = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
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

  const { id } = useParams();

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

  return (
    <div>
      <div ref={componentRef} className='add-property'>
        <h1>Book Tickets</h1>
        {/* <div ref={componentRef}></div> */}
        <div className='form-input'>
          <h4>Monument Name: {name}</h4>
        </div>
        <form action='/admin' method='post' onSubmit={handleSubmit}>
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
            <select value={nationality} onChange={selectChange}>
              <option value='none' selected disabled hidden>
                Select nationality
              </option>
              <option value='1'>Indian</option>
              <option value='2'>Foreigner</option>
            </select>
          </div>
          <div className='form-input'>
            <h4>Total Amount: </h4>
            <div className='total-amount'>₹ {totalAmount}</div>
          </div>
          {/* </form> */}
          <div className='print'>
            <div className='submit-button'>
              <button
                type='submit'
                onChange={(e) => {
                  setTotalAmount(e.target.value);
                }}
                // onClick={handleSubmit}
              >
                Book Ticket
              </button>
            </div>
            {printPdf ? (
              <div className='submit-button'>
                <button
                  // type='submit'
                  onClick={handlePrint}
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
  );
};

export default Booking;
