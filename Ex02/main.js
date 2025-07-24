import { doesHaveAReservation, addReservation } 
  from './reservationsData.js';

document.addEventListener('DOMContentLoaded', () => {
  const btn            = document.getElementById('btn');
  const userInput      = document.getElementById('userInput');
  const message        = document.getElementById('message');
  const tryAgainButton = document.getElementById('tryagain');

  function handleClick() {
    const name = userInput.value.trim();
    if (!name) return;

    if (doesHaveAReservation(name)) {
      message.textContent = `Welcome back, ${name}! Your reservation is confirmed.`;
    } else {
      message.textContent = `Sorry, ${name}, we have no reservation under that name.`;
      // באפשרותך להוסיף:
      // addReservation(name);
    }

    message.classList.toggle('hidden');
    tryAgainButton.classList.toggle('hidden');
    btn.removeEventListener('click', handleClick);
  }

  btn.addEventListener('click', handleClick);

  tryAgainButton.addEventListener('click', () => {
    message.classList.toggle('hidden');
    tryAgainButton.classList.toggle('hidden');
    userInput.value = '';
    btn.addEventListener('click', handleClick);
  });
});
