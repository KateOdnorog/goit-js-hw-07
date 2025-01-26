const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();
  
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    const formData = {
        email: email,
        password: password,
      };

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    } else {
        console.log(formData);
    }

    form.reset();
  }
