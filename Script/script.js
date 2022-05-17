// This handles password visability
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {

  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

// This handles confirm password visability
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPassword = document.querySelector('#confirmPassword');

toggleConfirmPassword.addEventListener('click', function (e) {

  // toggle the type attribute
  const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  confirmPassword.setAttribute('type', type);

  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});



function validator() {
  
  let userName = document.getElementById('userName').value;
  let email = document.getElementById('email').value.trim();
  let gender = document.getElementById('gender').value;
  let pass = document.getElementById('password').value;
  let confirmPass = document.getElementById('confirmPassword').value;
  
  const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);};

  if( userName == "" ) {
    document.getElementById( 'needed1' ).innerHTML = "Please enter your username"
    return(document.getElementById( 'needed1' ).innerHTML = "")
  }
  else if( email == "" ) {
    document.getElementById( 'needed2' ).innerHTML = "Please enter your email"
  }
  else if( !isEmailValid( email )) {
    document.getElementById('needed2').innerHTML = "Your email is incorrect"
  }
  else if( gender == "" ) {
    document.getElementById( 'needed3' ).innerHTML = "Please select your gender"
  }
  else if( pass == "" ) {
    document.getElementById( 'needed4' ).innerHTML = "Please enter your password"
  }
  else if( pass.length < 6 ) {
    document.getElementById( 'needed4' ).innerHTML = "Password entered is below 6"
  }
  else if( confirmPass == "" ) {
    document.getElementById( 'needed5' ).innerHTML = "Please confirm your password"
  }
  else if( confirmPass !== pass ) {
    document.getElementById( 'needed5' ).innerHTML = "Password did not match"
  }
  else{
    location.href = "index.html"
  }
}
