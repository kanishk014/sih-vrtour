import React, { useState } from 'react';
import axios from 'axios';
import './AddProperty.css';

import FileBase64 from 'react-file-base64';

const AddProperty = () => {
  const [property, setProperty] = useState({
    title: '',
    propertyImage: '',
    price: '',
    sqft: '',
    landArea: '',
    type: '',
    builtYear: '',
    parkingSpaces: '',
    address: '',
    timings: '',
    aartiTime: '',
    tourTime: '',
    about: '',
    factsAndFigures: '',
    famous: '',
    activities: '',
    feel360: '',
    vrVideo: '',
    mapLocation: '',
    latitude: '',
    longitude: '',
    video: '',
    websiteUrl: '',
  });

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = (event) => {
    setProperty({
      ...property,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    var activitiesArray = property.activities
      .toString()
      .trim()
      .split(/\s*,\s*/);

    let trimmedPropertyImage = property.propertyImage.slice(22);
    // console.log(trimmedPropertyImage);

    await axios
      .post('https://vrtour-sih.herokuapp.com/api/admin/addProperty', {
        title: property.title,
        propertyImage: trimmedPropertyImage,
        price: property.price,
        sqft: property.sqft,
        landArea: property.landArea,
        type: property.type,
        builtYear: property.builtYear,
        parkingSpaces: property.parkingSpaces,
        address: property.address,
        timings: property.timings,
        aartiTime: property.aartiTime,
        tourTime: property.tourTime,
        about: property.about,
        factsAndFigures: property.factsAndFigures,
        famous: property.famous,
        activities: activitiesArray,
        feel360: property.feel360,
        vrVideo: property.vrVideo,
        mapLocation: property.mapLocation,
        longitude: property.longitude,
        latitude: property.latitude,
        video: property.video,
        websiteUrl: property.websiteUrl,
      })
      .then((res) => {
        alert('Pilgrimage added sucessfully!');
        console.log(res);
      })
      .catch((err) => {
        alert('Can not add pilgrimage right now. Try again later');
        console.log(err);
      });
  };

  return (
    <div className='add-property'>
      <h1>Add A New Destination</h1>
      <form action='/admin' method='post' onSubmit={onSubmit}>
        <div className='form-input'>
          <h4>Title:</h4>
          <input
            type='text'
            name='title'
            required
            value={property.title}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Property Image:</h4>
          <FileBase64
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setProperty({ ...property, propertyImage: base64 })
            }
          />
          {/* <img src={propertyImage} /> */}
        </div>
        <div className='form-input'>
          <h4>Price (Numeric Value):</h4>
          <input
            type='text'
            name='price'
            required
            value={property.price}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Square Feet (Numeric Value): </h4>
          <input
            type='text'
            name='sqft'
            required
            value={property.sqft}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Land Area (Numeric Value):</h4>
          <input
            type='text'
            name='landArea'
            required
            value={property.landArea}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Type:</h4>
          <input
            type='text'
            name='type'
            required
            value={property.type}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Built Year:</h4>
          <input
            type='text'
            name='builtYear'
            required
            value={property.builtYear}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Parking Spaces (Numeric Value):</h4>
          <input
            type='text'
            name='parkingSpaces'
            required
            value={property.parkingSpaces}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Address:</h4>
          <input
            type='text'
            name='address'
            required
            value={property.address}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Timings:</h4>
          <input
            type='text'
            name='timings'
            required
            value={property.timings}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Aarti Time:</h4>
          <input
            type='text'
            name='aartiTime'
            required
            value={property.aartiTime}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Tour Time:</h4>
          <input
            type='text'
            name='tourTime'
            required
            value={property.tourTime}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>About:</h4>
          <textarea
            name='about'
            rows='1'
            required
            value={property.about}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Facts and Figures:</h4>
          <textarea
            name='factsAndFigures'
            rows='1'
            required
            value={property.factsAndFigures}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Famous:</h4>
          <textarea
            name='famous'
            rows='1'
            required
            value={property.famous}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Activities (Separate by commas):</h4>
          <textarea
            name='activities'
            rows='1'
            required
            value={property.activities}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>360 Image:</h4>
          <input
            type='text'
            name='feel360'
            required
            value={property.feel360}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>VR Video:</h4>
          <input
            type='text'
            name='vrVideo'
            required
            value={property.vrVideo}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Map Location:</h4>
          <input
            type='text'
            name='mapLocation'
            required
            value={property.mapLocation}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Latitude:</h4>
          <input
            type='text'
            name='latitude'
            required
            value={property.latitude}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Longitude:</h4>
          <input
            type='text'
            name='longitude'
            required
            value={property.longitude}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <h4>Video:</h4>
          <input
            type='text'
            name='video'
            value={property.video}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-input'>
          <h4>Website URL:</h4>
          <input
            type='text'
            name='websiteUrl'
            required
            value={property.websiteUrl}
            onChange={handleChange}
          />
        </div>

        <div className='submit-button'>
          <button type='submit'>Add Pilgrimage</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
