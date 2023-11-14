const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const resultAreaSuccess = document.getElementById('result-success');
const resultAreaError = document.getElementById('result-error');

const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const calculateBmi = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +weightInput.value;
  const bmi = enteredWeight / (enteredHeight * enteredHeight);

  const resultElementSuccess = document.createElement('ion-card');
  resultElementSuccess.innerHTML = `
		<ion-card-content>
			<h2>${bmi.toFixed(2)}</h2>
		</ion-card-content>
	`;

  const resultElementError = document.createElement('ion-card');
  resultElementError.innerHTML = `
		<ion-card-content>
			<h2>${bmi} - Please enter valid values!</h2>
		</ion-card-content>
	`;

	if (isNaN(bmi)) {
    resultAreaError.appendChild(resultElementError)
    return;
  }

	if (enteredHeight === 0 || enteredWeight === 0) {
		alert('Please fill in all fields');
		return;
	}

  resultAreaSuccess.innerHTML = '';
	resultAreaError.innerHTML = '';

  resultAreaSuccess.appendChild(resultElementSuccess);
};

const resetInputs = () => {
  heightInput.value = '';
  weightInput.value = '';
  resultAreaSuccess.innerHTML = '';
	resultAreaError.innerHTML = '';
};

calculateBtn.addEventListener('click', calculateBmi);
resetBtn.addEventListener('click', resetInputs);
