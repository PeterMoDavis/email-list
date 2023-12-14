document
  .getElementById('userForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://localhost:8000/saveUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email }),
    });

    const data = await response.json();
    console.log(data);

    document.querySelector('#userForm').reset();
  });
