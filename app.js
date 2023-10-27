const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');
const inputInformation = {};

function retrieveInput() {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    inputInformation.firstName = firstName.value;
    inputInformation.lastName = lastName.value;
    inputInformation.email = email.value;

    console.log(inputInformation);
  });
}

retrieveInput();
