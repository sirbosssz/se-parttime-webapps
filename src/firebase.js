//init firebase
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyD6O4r9R45V--vk3Tuup-tH-CP8wTu0NQ4",
    authDomain: "parttime-finder.firebaseapp.com",
    databaseURL: "https://parttime-finder.firebaseio.com",
    projectId: "parttime-finder",
    storageBucket: "parttime-finder.appspot.com",
    messagingSenderId: "479332450590"
  };
  firebase.initializeApp(config);

  //export to server
  export const auth = firebase.auth();
  export default firebase;