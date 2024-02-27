

let form = document.getElementById('form')
    form.addEventListener('submit',(e) => {
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // local storage
        localStorage.setItem('username',username);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        window.location.href = 'login.html';
        e.preventDefault();
        alert("Your data is saved in local storage. Kindly Login");
    });

    

    // Add event listener to login form
   // let loginForm = document.getElementById('loginForm');
   // loginForm.addEventListener('submit', handleLogin);
