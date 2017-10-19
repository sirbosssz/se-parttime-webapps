complete = false;
window.onload = function () {
  complete = true;
  console.log('loaded complete');
  // close popup
  popup.onclick = function () {
    popup.style.filter = 'opacity(0)';
    popup.style.visibility = 'hidden';
    popupBox.style.filter = 'opacity(0)';
    popupBox.style.visibility = 'hidden';
    regisInput.style.filter = 'opacity(0)';
    regisInput.style.visibility = 'hidden';
    loginInput.style.filter = 'opacity(0)';
    loginInput.style.visibility = 'hidden';
  }
}
var popup = document.getElementById('popup');
var popupBox = document.getElementById('popup-box');
var loginInput = document.getElementById('login-input');
var regisInput = document.getElementById('regis-input');

// open popup
function openPopup() {
  popup.style.filter = 'opacity(1)';
  popup.style.visibility = 'visible';
  popupBox.style.filter = 'opacity(1)';
  popupBox.style.visibility = 'visible';
}
function closePopup(){
  popup.style.filter = 'opacity(0)';
  popup.style.visibility = 'hidden';
  popupBox.style.filter = 'opacity(0)';
  popupBox.style.visibility = 'hidden';
  regisInput.style.filter = 'opacity(0)';
  regisInput.style.visibility = 'hidden';
  loginInput.style.filter = 'opacity(0)';
  loginInput.style.visibility = 'hidden';
}

function loginForm() {
  openPopup();
  setTimeout(function () {
    loginInput.style.display = 'inherit';
    regisInput.style.display = 'none';
  }, 300);
  loginInput.style.filter = 'opacity(1)';
  loginInput.style.visibility = 'visible';

  regisInput.style.filter = 'opacity(0)';
  regisInput.style.visibility = 'hidden';
  document.getElementById('input-change').innerHTML = 'ยังไม่มีบัญชีผู้ใช้?    <b onclick="regisForm()">สมัครสมาชิก</b>';
}

function regisForm() {
  openPopup();
  setTimeout(function () {
    loginInput.style.display = 'none';
    regisInput.style.display = 'inherit';
  }, 300);
  loginInput.style.filter = 'opacity(0)';
  loginInput.style.visibility = 'hidden';

  regisInput.style.filter = 'opacity(1)';
  regisInput.style.visibility = 'visible';
  document.getElementById('input-change').innerHTML = 'มีบัญชีผู้ใช้อยู่แล้ว?    <b onclick="loginForm()">เข้าสู่ระบบ</b>';
}

// firebase setup
