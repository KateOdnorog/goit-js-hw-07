const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (e) => {
  output.textContent = e.currentTarget.value.trim();
  output.textContent = output.textContent === "" ? "Anonymous" : output.textContent;
});