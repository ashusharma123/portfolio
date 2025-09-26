
// script.js
const greetings = [
  "Welcome",
  "नमस्ते",
  "Bonjour",
  "Hola",
  "Hallo",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "Привет",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "ধন্যবাদ"
];

let currentGreeting = 0;
const greetingText = document.getElementById("greeting-text");

function updateGreeting() {
  greetingText.textContent = greetings[currentGreeting];
  currentGreeting = (currentGreeting + 1) % greetings.length;
}

setInterval(updateGreeting, 2000);
updateGreeting();
// Greeting animation
const greetingText = document.getElementById("greeting-text");
const hour = new Date().getHours();
if (hour < 12) {
greetingText.textContent = "Good Morning 🌞";
} else if (hour < 18) {
greetingText.textContent = "Good Afternoon ☀️";
} else {
greetingText.textContent = "Good Evening 🌙";
}

// Review form functionality
document.getElementById("review-form").addEventListener("submit", function (e) {
e.preventDefault();
const name = document.getElementById("name").value;
const message = document.getElementById("message").value;

if (name && message) {
  const reviewBox = document.createElement("div");
  reviewBox.className = "review";
  reviewBox.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

  document.querySelector(".reviews-box").appendChild(reviewBox);

  document.getElementById("review-form").reset();
  document.getElementById("thank-you-message").style.display = "block";
  setTimeout(() => {
    document.getElementById("thank-you-message").style.display = "none";
  }, 3000);
}
});
// Greeting Text
const greetingEl = document.getElementById('greeting-text');
const hours = new Date().getHours();
let greeting = 'Hello';
if (hours < 12) greeting = 'Good Morning';
else if (hours < 18) greeting = 'Good Afternoon';
else greeting = 'Good Evening';
greetingEl.innerText = `${greeting}! Welcome to my portfolio.`;

// Handle Review Submit
const form = document.getElementById('review-form');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const thankYouMessage = document.getElementById('thank-you-message');
const reviewsBox = document.querySelector('.reviews-box');

form.addEventListener('submit', function (e) {
e.preventDefault();

const name = nameInput.value.trim();
const message = messageInput.value.trim();

if (name && message) {
  const newReview = document.createElement('div');
  newReview.classList.add('review');
  newReview.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

  // Insert before the WhatsApp icon (if inside reviews)
  const whatsappButton = document.querySelector('.whatsapp-float-inside');
  reviewsBox.insertBefore(newReview, whatsappButton);

  form.reset();
  thankYouMessage.style.display = 'block';

  setTimeout(() => {
    thankYouMessage.style.display = 'none';
  }, 4000);
}
});