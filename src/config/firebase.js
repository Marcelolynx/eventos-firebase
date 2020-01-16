import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCT-gt5zIQA0SKIlvIJ-6IcE0tUDIvAx-Q",
  authDomain: "paiva-2020.firebaseapp.com",
  databaseURL: "https://paiva-2020.firebaseio.com",
  projectId: "paiva-2020",
  storageBucket: "paiva-2020.appspot.com",
  messagingSenderId: "573625121051",
  appId: "1:573625121051:web:78433b23c837f9c5137bbe",
  measurementId: "G-EL24E6PZYN"
};

export default firebase.initializeApp(firebaseConfig);