const display = document.getElementById('resultPass').innerText;
const rangoValores = document.getElementById('rangoValor');
const btnGenerate = document.getElementById('btnGenerate');
const displayValueRange = document.getElementById('displayValueRange')
const btnCopy = document.getElementById('btnCopy');

const optupperCase = document.getElementById('optupperCase')
const optlowerCase = document.getElementById('optlowerCase')
const optnumbers = document.getElementById('optnumbers')
const optsimbols = document.getElementById('optsimbols')
const displayResult = document.getElementById('resultPass');
let range = 6;
const upperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const lowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
const simbols = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=',
  '[', ']', '{', '}', '|', ':', ';', '"', '<', '>', ',', '.', '?', '/'
];

//function to register input value
rangoValores.addEventListener('input', function () {
  //variable to storage range value
  range = rangoValores.value;


});

btnGenerate.addEventListener('click', function () {
  const mixedArray = [];
  const randomArray = [];
  const mix = [];
  if (optsimbols.checked) {
    console.log("El checkbox simbols está marcado.");
    for (i = 0; i < range; i++) {
      let randomItem = simbols[(Math.floor(Math.random() * simbols.length))];
      randomArray.push(randomItem)
    }
  }
  if (optnumbers.checked) {
    console.log("El checkbox number está marcado.");
    for (i = 0; i < range; i++) {
      let randomItem = numbers[(Math.floor(Math.random() * numbers.length))];
      randomArray.push(randomItem)
      // console.log('quedo en valor >>> ', randomArray , '<<<')
    }
  }
  if (optlowerCase.checked) {
    console.log("El checkbox lowerCase está marcado.");
    for (i = 0; i < range; i++) {
      let randomItem = lowerCase[(Math.floor(Math.random() * lowerCase.length))];
      randomArray.push(randomItem)
      // console.log('quedo en valor >>> ', randomArray , '<<<')
    }
  }
  if (optupperCase.checked) {
    console.log("El checkbox upperCase está marcado.");
    for (i = 0; i < range; i++) {
      let randomItem = upperCase[(Math.floor(Math.random() * upperCase.length))];
      randomArray.push(randomItem)

    }
  }
  if (optupperCase.checked && optlowerCase.checked && optnumbers.checked && optsimbols.checked) {
    console.log('se activaron todos')
    for (i = 0; i < range / 2; i++) {
      let simbol = simbols[(Math.floor(Math.random() * simbols.length))];
      let number = numbers[(Math.floor(Math.random() * numbers.length))];
      let lower = lowerCase[(Math.floor(Math.random() * lowerCase.length))];
      let Upper = upperCase[(Math.floor(Math.random() * upperCase.length))];
      mixedArray.push(simbol)
      mixedArray.push(Upper)
      mixedArray.push(lower)
      mixedArray.push(number)
      mixedArray.splice(range)
      console.log('resultado de mixed', mixedArray)
      displayResult.innerText = mixedArray.join('')
    }
  }
  else {
    console.log("El checkbox está desmarcado.");
  }

  displayValueRange.innerText = `Password Length: ${range}`

  console.log('ramdomarray quedo en valor >>> ', randomArray.join(''), '<<<')
  mixFinalarray()
  function mixFinalarray() {
    for (i = 0; i < range; i++) {
      let randomItem = randomArray[(Math.floor(Math.random() * randomArray.length))];
      mix.push(randomItem)
      mix.splice(range)
    }
  }
  displayResult.innerText = mix.join('')

});

stateCopy = false;
btnCopy.addEventListener('click' , function(){
  navigator.clipboard.writeText(displayResult.innerText);
  const modal = document.getElementById('modalhidden')
  const container = document.getElementById('container')
  if(!stateCopy){
    // const modal = document.createElement('span');
    modal.classList.toggle('modal1')
    container.appendChild(modal)
    modal.innerText = 'Copiado'
    stateCopy = true;
  }else{
    modal.classList.toggle('modal1')
    modal.innerText = ''
    stateCopy = false
  }  

});