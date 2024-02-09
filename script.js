const form = document.querySelector('form');
const popup = document.querySelector('.pu-box');
const close = document.querySelector('.close-btn');
const height_input = document.querySelector('.height');
const weight_input = document.querySelector('.weight');
//Submit button
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let height = parseInt(height_input.value);
  let weight = parseInt(weight_input.value);
  const bmi_score = document.querySelector('.bmi-result');
  const bmi_text = document.querySelector('.bmi-text');
  let text;
  if (height === '' || height < 0 || isNaN(height)) {
        alert("Please enter a valid height (cm)");
        height_input.focus();
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
        alert("Please enter a valid weight (kg)");
        weight_input.focus();
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Show result text
    if (bmi < 25) {
        text = 'You are underweight';
      } else if (bmi >= 25 && bmi < 30) {
        text = 'You are a healthy weight';
      } else {
        text = 'You are overweight';
      }
      //Show pu-box
      popup.style.display = 'block';
      //Display BMI result
      bmi_score.innerHTML = bmi;
      //Display BMI text
      bmi_text.innerHTML = text;
      //Clear input fields
      height_input.value = '';
      weight_input.value = '';     
  }
});
//Close function for pu-box
close.addEventListener('click', function (e) {
    popup.style.display = 'none';
});