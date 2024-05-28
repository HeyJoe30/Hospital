document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    loader.addEventListener('animationend', function(){
        content.style.opacity = '1';
    })

    const regBtn = document.getElementById('register-btn');
    const logBtn = document.getElementById('login-btn');
    const regForm = document.getElementById('register-form');
    const logForm = document.getElementById('login-form');

    regBtn.addEventListener('click', function(){
        regForm.style.display = 'block';
        logForm.style.display = 'none';
        content.style.display = 'none';
    });

    logBtn.addEventListener('click', function(){
        logForm.style.display = 'block';
        regForm.style.display = 'none';
        content.style.display = 'none';
    });
});

document.getElementById('register-sub').addEventListener('click', function(event){
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var login = document.getElementById('login').value;
    var password = document.getElementById('pass').value;

    var userData = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        username: login,
        password: password
    };

// тут response и error - зарезервированные слова в js в методе fetch

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            alert('Registration Successful!');
            window.location.href = '/user.html';
        }
        else {
            return response.text();
        }
    })
    .then(errorMsg => {
        if (errorMsg){
            alert('Error registration ' + errorMsg)
        }
    })
    .catch(error => console.error('Error:', error));
        
    
});


document.getElementById('login-sub').addEventListener('click', function(event){
    event.preventDefault();

    var userLogin = document.getElementById('user-login').value;
    var userPassword = document.getElementById('user-pass').value;

    var userAutorisation = {
        login: userLogin,
        password: userPassword
    };

// тут response и error - зарезервированные слова в js в методе fetch

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userAutorisation)
    })
    .then(response => {
        if (response.ok) {
            if (response.status == 200){
                alert('Successful authorization!');
                window.location.href = '/doctor.html';
            }
            else if (response.status == 201){
                alert('Successful authorization!');
                window.location.href = '/user.html';
            }
            else{
                return response.text();
            }
        } 
        else {
            alert('Invalid login or password');
        }
    })
    .then(errorMsg => {
        if (errorMsg){
            alert('Error Authorization ' + errorMsg)
        }
    })
    .catch(error => console.error('Error:', error));
        
    
});