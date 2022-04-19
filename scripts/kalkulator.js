const operators = document.querySelectorAll('.operator');
const hasil = document.querySelector('#hasil');

let numbers = '';
let aritmatika = '';

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    const value = event.target.value;

    switch (value) {
      case 'allclear':
        numbers = '0';
        break;
      case 'delete':
        if (numbers.length === 1) {
          numbers = '0';
        } else {
          numbers = numbers.toString().slice(0, -1);
        }
        break;
      case '=':
        const [number1, number2] = numbers.split(aritmatika);

        if (aritmatika == '/') {
          numbers = parseInt(number1, 10) / parseInt(number2, 10);
        } else if (aritmatika == '*') {
          numbers = parseInt(number1, 10) * parseInt(number2, 10);
        } else if (aritmatika == '-') {
          numbers = parseInt(number1, 10) - parseInt(number2, 10);
        } else if (aritmatika == '+') {
          numbers = parseInt(number1, 10) + parseInt(number2, 10);
        } else {
          return prompt('Error, tipe tidak diketahui');
        }
        break;
      default:
        console.log(parseInt(value));
        if (isNaN(parseInt(value, 10))) {
          aritmatika = value;
        }
        numbers += value;
        break;
    }

    hasil.innerHTML = numbers;
    console.log(numbers);
  });
});

console.log(hasil);
