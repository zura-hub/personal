function data() {
    const dataInfo = {
        name: nameInput.value,
        mail: mailInput.value,
        text: textArea.value
    };

    mailjs.send('service_wfkwd1d', 'service_wfkwd1d', dataInfo, 'sajaia89@gmail.com')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}



let email = document.getElementById('email');

email.addEventListener('input', function () {
    if (!email.value.includes('@')) {
        alert('Wrong email!');
    }
});
