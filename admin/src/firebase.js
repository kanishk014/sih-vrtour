import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'process.env.APP_KEY',
  authDomain: 'netflix-412fd.firebaseapp.com',
  projectId: 'netflix-412fd',
  storageBucket: 'netflix-412fd.appspot.com',
  messagingSenderId: '527241964215',
  appId: '1:527241964215:web:f015829e5d477f17687b32',
  measurementId: 'G-0997X6ZN8J',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
