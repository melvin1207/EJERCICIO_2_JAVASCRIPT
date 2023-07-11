const randomTen = document.querySelector('#randomTen');
const outOne = document.querySelector('#out1');
const cadenaInput = document.querySelector('#cadenaInput');
const generateArray = document.querySelector('#generateArray');
const outTwo = document.querySelector('#out2');
const numbersHtml = document.querySelector('#numbersHtml');
const order = document.querySelector('#order');
const outThree = document.querySelector('#out3');
const outFour = document.querySelector('#out4');
const outFive = document.querySelector('#out5');

let numbers = [];
let msg = [];
const numbersArray = [10,40,30,20,15,5];
numbersHtml.innerHTML = numbersArray;

randomTen.addEventListener('click', (e) => {
  e.preventDefault();
  for (let i = 0; i <= 9; i++) {
    numbers[i] = Number(Math.random().toFixed(2));
  }
  outOne.innerHTML = "Los numeros son: " + numbers;
})

generateArray.addEventListener('click', (e) => {
  e.preventDefault();
  msg = cadenaInput.value;
  let result = msg.split(',')
  outTwo.innerHTML = "Usted ha ingresado: " + result;
})

order.addEventListener('click', (e) => {
  e.preventDefault();
  let max = Math.max(...numbersArray);
  let min = Math.min(...numbersArray);
  for (let i = numbersArray.length; i > 0; i--){
    for (let j = 0; j < i -1; j++){
      if (numbersArray[j] > numbersArray[j+1]){
        let temp = numbersArray[j];
        numbersArray[j] = numbersArray[j+1];
        numbersArray[j+1] = temp;
      }
    }
  }
  outThree.innerHTML = "El numero mayor es: " + max;
  outFour.innerHTML = "El numero menor es: " + min;
  outFive.innerHTML = "El orden de menor a mayor es: " + numbersArray;
})
