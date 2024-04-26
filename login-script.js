
function isValidEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
 
  function containsLetter(password) {
    
    const letterRegex = /[a-zA-Z]/;
    return letterRegex.test(password);
  }
  
  
  function validateLoginForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    
    if (!isValidEmail(emailInput.value)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    
    if (!containsLetter(passwordInput.value)) {
      alert('Password must contain at least one letter');
      return false;
    }
  
    
    if (emailInput.value === '' || passwordInput.value === '') {
      alert('Please fill in all fields');
      return false;
    }
  
    return true;
  }
  
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
   
    event.preventDefault();
  
    
    if (validateLoginForm()) {
      
      alert('Login successful');
     
    }
  });
  