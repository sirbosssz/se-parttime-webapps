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
	if (email == '' || password == '') {
		alert('กรุณาใส่ email และรหัสผ่าน');
	} else {
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
			// error handling
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log('error');
		});
		console.log(email + ' sign in');
	}
}

// sign up function
function getSignUp() {
	var email = document.forms['regis-form']['email'].value;
	var password = document.forms['regis-form']['password'].value;
	var repeatPassword = document.forms['regis-form']['repeatPassword'].value;
	if (email == '' || password == '' || repeatPassword == '') {
		alert('กรุณาใส่ email และรหัสผ่าน');
	} else if (password != repeatPassword) {
		alert('กรุณาใส่รหัสผ่านให้ตรงกันทั้ง 2 ช่อง');
	} else {
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
			// error handling
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log('error');
		});
		console.log(email + ' sign up');
	}
}