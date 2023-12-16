document
  .getElementById('user-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const congratulations = document.querySelector('.congratulations');
    const overlay = document.querySelector('.dimmed-overlay');
    const inputs = document.querySelectorAll('input');

    let allInputsFilled = true;

    areAllInputsFilled();

    if (allInputsFilled) {
      //send data to mongdb
      sendDataToMongo();

      congratulations.innerText = `Congratulations ${firstName}, you've entered your email!!!`;

      //show overlay 'should change name'
      showCongratulations();

      //reset form
      document.querySelector('#user-form').reset();
    } else {
      congratulations.innerText = 'You have not filled out all the inputs';

      //show overlay
      showCongratulations();
    }

    //set timeout to remove overlay after 3 seconds
    setTimeout(() => {
      hideCongratulations();
    }, 3000);

    function showCongratulations() {
      congratulations.classList.add('show');
      overlay.classList.add('show');
    }

    function hideCongratulations() {
      congratulations.classList.remove('show');
      overlay.classList.remove('show');
    }

    function areAllInputsFilled() {
      for (const input of inputs) {
        console.log(input.value);
        if (input.value === '') {
          allInputsFilled = false;
          break; // Break the loop if any input is empty
        }
      }
    }

    async function sendDataToMongo() {
      const response = await fetch('http://localhost:8000/saveUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email }),
      });
      const data = await response.json();
      console.log(data);
    }
  });
