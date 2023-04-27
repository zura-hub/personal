const nameError = document.querySelector('.error-massage')
const mailError = document.querySelector('.email-error-massage')
const textError = document.querySelector('.text-error-massage')
const send = document.querySelector('.send')
const sumbit = document.querySelector('.cont-info')

// inputs
const nameInput = document.querySelector('#nameInput')
const meilInput = document.querySelector('#emailInput')
const textInput = document.querySelector('#text-area')


// validation functions

const chackedName = nameInput.addEventListener('input', function () {
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


const chackedMail = meilInput.addEventListener('input', function () {
    if (meilInput.value.trim() === ' ') {
        mailError.textContent =
            'Enter valid email'
        return false
    }
    if (!meilInput.value.trim().includes('@')
        || !meilInput.value.trim().includes('.')
    ) {
        mailError.textContent =
            'Email format must @example.com'
        return false
    }

    mailError.textContent = ''
    return true
})


const chackedText = textInput.addEventListener('input', function () {
    if (textInput.value.trim() === '') {
        textError.textContent =
            'Text area must field'
        return false
    }
    if (textInput.value.trim().length <= 20) {
        textError.textContent =
            'Text mus contain at last 10 words'
        return false
    }

    textError.textContent = ''
    return true
})





sumbit.addEventListener('submit', function (event) {
    event.preventDefault();


    const userName = nameInput.value;
    const userEmail = meilInput.value;
    const userText = textInput.value;

    const obgData = {
        name: userName,
        email: userEmail,
        Txt: userText
    };

    console.log(obgData);

    localStorage.setItem('obgData', JSON.stringify(obgData));
});



send.addEventListener('click', () => {
    // Check if any of the input fields are empty or contain only whitespace
    if (nameInput.value.trim() === '' || meilInput.value.trim() === '' || textInput.value.trim() === '') {
        // Show an alert if any of the input fields are empty or contain only whitespace
        alert('Please fill in all the details.');
        return false
    }
    else {
        alert('Information sent successfully')
        nameError.textContent = '';
        mailError.textContent = '';
        textError.textContent = '';
    }

});






