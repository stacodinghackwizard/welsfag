document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this;
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
  // Get the current date and time
const now = new Date();
const hour = now.getHours();

// Function to determine the time of the day
function getTimeOfDay(hour) {
  if (hour >= 5 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 18) {
    return 'afternoon';
  } else {
    return 'night';
  }
}

// Function to update the greeting text
function updateGreeting() {
  const timeOfDay = getTimeOfDay(hour);
  let greeting = '';

  switch (timeOfDay) {
    case 'morning':
      greeting = 'Good morning!';
      break;
    case 'afternoon':
      greeting = 'Good afternoon!';
      break;
    case 'night':
      greeting = 'Good night!';
      break;
    default:
      greeting = 'Hello!';
      break;
  }

  // Display the greeting text
  document.getElementById('greeting').innerText = greeting;
}

// Call the function to update the greeting text
updateGreeting();
