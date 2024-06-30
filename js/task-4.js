
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    // console.log(event)

    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('All form fields must be filled in');
    } else {
        console.log({ Email: email.value.trim(), Password: password.value.trim() });
        event.currentTarget.reset();
    }
}
