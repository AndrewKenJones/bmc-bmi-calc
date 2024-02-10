// Varibles declared
const form = document.querySelector('form');
const popup = document.querySelector('.popup-box');
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
  //   User alert if invalid / insufficent data entered
  if (height === '' || height < 0 || isNaN(height)) {
        alert("Please enter a valid height (cm)");
        height_input.focus();
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
        alert("Please enter a valid weight (kg)");
        weight_input.focus();
  // BMI calculation to the nearest .00 decimal place
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Text shown following calculation
    if (bmi < 25) {
        text = 'You are underweight.';
      } else if (bmi >= 25 && bmi < 30) {
        text = 'You are a healthy weight.';
      } else {
        text = 'You are overweight.';
      }
      //Show popup-box
      popup.style.display = 'block';
      //Display BMI result
      bmi_score.innerHTML = bmi;
      //Display BMI text
      bmi_text.innerHTML = text;
      //Clear input fields following calculation
      height_input.value = '';
      weight_input.value = '';     
  }
});
//Close function for popup-box
close.addEventListener('click', function (e) {
    popup.style.display = 'none';
});