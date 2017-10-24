// Initialize Firebase
var config = {
	apiKey: "AIzaSyD6O4r9R45V--vk3Tuup-tH-CP8wTu0NQ4",
	authDomain: "parttime-finder.firebaseapp.com",
	databaseURL: "https://parttime-finder.firebaseio.com",
	projectId: "parttime-finder",
	storageBucket: "parttime-finder.appspot.com",
	messagingSenderId: "479332450590"
};
firebase.initializeApp(config);

// sign in function
function getSignIn() {
	var email = document.forms['login-form']['email'].value;
	var password = document.forms['login-form']['password'].value;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
		// error handling
		var errorCode = error.code;
		var errorMessage = error.message;
	});
	console.log(email + ' sign in complete');
}

// sign up function
function getSignUp() {
	var email = document.forms['regis-form']['email'].value;
	var password = document.forms['regis-form']['password'].value;
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
		// error handling
		var errorCode = error.code;
		var errorMessage = error.message;
	});
	console.log(email + ' sign up complete');
}