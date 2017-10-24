function(){

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

	//SignIn Function
	function getSignin(){
		const txtEmail = document.getElementById('email');
		const txtPassword = document.getElementById('password');
		login.addEventListener('click', e => {
			//get email and password
			const email = txtEmail.value;
			const pass = txtPassword.value;
			const auth = firebase.auth();
			const promise = auth.signInWithEmailAndPassword(email, pass);
			promise.catch(e => console.log(e.message));
		});
		
	}

	//SignUp Function
	function getSignup(){
		const txtEmail = document.getElemntById('email');
		const txtPassword = document.getElementById('password');
		signup.addEventListener('click', e => {
			const email = txtEmail.value;
			const pass = txtPassword.value;
			const auth = firebase.auth();
			const promise = auth.createUserWithEmailAndPassword(email, pass);
			promise.catch(e => console.log(e.message));
		});
	}


	// firebase.auth().onAuthStateChanged(firebaseUser => {
	// 	if(firebaseUser){
	// 		console.log(firebaseUser);
	// 	}else{
	// 		console.log('not logged in');
	// 	}
	// });


	// buttonlogout.addEventListener('click', e => {
	// 	firebase.auth().signOut();
	// });


}();