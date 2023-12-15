document
  .getElementById('userForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const congratulations = document.querySelector('.congratulations');
    const overlay = document.querySelector('.dimmed-overlay');
    const inputs = document.querySelectorAll('input');

    const response = await fetch('http://localhost:8000/saveUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email }),
    });

    const data = await response.json();

    congratulations.classList.add('show');
    overlay.classList.add('show');

    setTimeout(() => {
      congratulations.classList.remove('show');
      overlay.classList.remove('show');
    }, 3000);

    document.querySelector('#userForm').reset();
  });
