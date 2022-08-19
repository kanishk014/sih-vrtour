import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import './Booking.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Booking = () => {
  //   const [ticketPrice, setTicketPrice] = useState('');
  const [fixedAmount, setFixedAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [phone, setPhone] = useState();
  const [nationality, setNationality] = useState('none');
  const [booking, setBooking] = useState({
    name: '',
    date: '',
    mobileNo: '',
    noOfPersons: Number,
    totalAmount: Number,
  });

  const { id } = useParams();

  useEffect(function () {
    axios
      .get(
        `https://vrtour-sih.herokuapp.com/api/property/getpropertydetails/${id}`
      )
      .then((res) => {
        setFixedAmount(res.data.price);
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
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: 'VRTOUR Tester',
        email: 'vrtour@tester.com',
        contact: '9999108799',
      },
      notes: {
        address: 'Razorpay Corporate Office',
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

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('http://43.204.24.76:4000/api/ticketBooking/bookTicket', {
        // userId: booking.userId,
        name: booking.name,
        date: booking.date,
        mobileNo: booking.mobileNo,
        // monumentId: booking.monumentId,
        noOfPersons: booking.noOfPersons,
        nationality: nationality,
        totalAmount: booking.totalAmount,
      })
      .then((res) => {
        alert('Booking sucessfully!');
        console.log(res);
      })
      .catch((err) => {
        alert('Can not book right now. Try again later');
        console.log(err);
      });
  };

  return (
    <div className='add-property'>
      <h1>Book Tickets</h1>
      <form action='/admin' method='post' onSubmit={onSubmit}>
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
            // type='tel'
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
            <option value='Indian'>Indian</option>
            <option value='Foreigner'>Foreigner</option>
          </select>
        </div>
        <div className='form-input'>
          <h4>Total Amount: </h4>
          <div className='total-amount'>₹ {totalAmount}</div>
          {/* <input
            type='text'
            name='totalAmount'
            placeholder='Total payable amount'
            required
            value={booking.price}
          /> */}
        </div>
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
      </form>
    </div>
  );
};

export default Booking;
