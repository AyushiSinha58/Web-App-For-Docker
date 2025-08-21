const messages = [
        "You are stronger than you think.",
        "Peace begins with a smile.",
        "Believe in yourself and all that you are.",
        "Take a deep breath, and let go of worry.",
        "Every day is a new beginning."
];

let messageIndex = 0;
const button = document.getElementById('myButton');

const messageContainer = document.createElement('div');
messageContainer.style.marginTop = '20px';
messageContainer.style.fontSize = '1.2rem';
messageContainer.style.fontFamily = "'Cinzel', serif";
messageContainer.style.textAlign = 'center';
document.body.appendChild(messageContainer);

button.addEventListener('click', () => {
  messageContainer.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
});
