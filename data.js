const nameError = document.querySelector('.error-massage')
const mailError = document.querySelector('.email-error-massage')
const textError = document.querySelector('.text-error-massage')

// inputs
const nameInput = document.querySelector('#nameInput')
const meilInput = document.querySelector('#emailInput')
const textInput = document.querySelector('#text-area')

// validation functions

 nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Enter valid name';
      return false;
    }
  
    if (nameInput.value.trim().length <= 1) {
      nameError.textContent = 'Name must contain at least two characters';
      return false;
    }
  
    nameError.textContent = '';
    return true;
  });


  meilInput.addEventListener('input' , function(){
    if (meilInput.value.trim() === ' '){
        mailError.textContent = 
        'Enter valid email'
        return false
    }
    if (!meilInput.value.trim().includes('@')
        || !meilInput.value.trim().includes('.')        
    )
    {
        mailError.textContent =
        'Email format must @example.com'
        return false
    }

    mailError.textContent = ''
    return true
  })


  textInput.addEventListener('input' , function () {
    if (textInput.value.trim() === ''){
        textError.textContent =
        'Text area must field'
        return false
    }
    if (textInput.value.trim().length <= 20){
        textError.textContent = 
        'Text mus contain at last 20 words'
    }
  })


  function errorField() {
    alert ('Please fill in the contact details')
  }