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

    let allInputsFilled = true;

    for (const input of inputs) {
      console.log(input.value);
      if (input.value === '') {
        allInputsFilled = false;
        break; // Break the loop if any input is empty
      }
    }

    if (allInputsFilled) {
      const response = await fetch('http://localhost:8000/saveUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email }),
      });
      const data = await response.json();

      congratulations.innerText = `Congratulations ${firstName}, you've entered your email!!!`;
      congratulations.classList.add('show');
      overlay.classList.add('show');
    } else {
      congratulations.innerText = 'You have not filled out all the inputs';
      congratulations.classList.add('show');
      overlay.classList.add('show');
    }

    setTimeout(() => {
      congratulations.classList.remove('show');
      overlay.classList.remove('show');
      document.querySelector('#userForm').reset();
    }, 3000);
  });
