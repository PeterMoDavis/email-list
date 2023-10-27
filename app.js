const name = document.querySelector('#name');
const email = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

function retrieveInput() {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Name: ${name.value}  Email: ${email.value}`);
  });
}

retrieveInput();
