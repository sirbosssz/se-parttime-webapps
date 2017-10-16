complete = false;
window.onload = function () {
  complete = true;
  console.log('loaded complete');
  popup.onclick = function () {
    popup.style.display = 'none';
    loginPopup.style.display = 'none';
    regisPopup.style.display = 'none';
  }
}
var popup = document.getElementById('popup');
var regisPopup = document.getElementById('regis-input');
var loginPopup = document.getElementById('login-input');

function loginForm() {
  if (complete) {
    popup.style.display = 'flex';
    loginPopup.style.display = 'inherit';
  }
}

function regisForm() {
  if (complete) {
    popup.style.display = 'flex';
    regisPopup.style.display = 'inherit';
  }
}
