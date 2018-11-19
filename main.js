// chaque valeur de variable est retrouvé grace a l'ID de l'elements html
var oneBtn = document.getElementById('calc__un');
var twoBtn = document.getElementById('calc__deux');
var threeBtn = document.getElementById('calc__trois');
var fourBtn = document.getElementById('calc__quatre');
var fiveBtn = document.getElementById('calc__cinq');
var sixBtn = document.getElementById('calc__six');
var sevenBtn = document.getElementById('calc__sept');
var eightBtn = document.getElementById('calc__huit');
var nineBtn = document.getElementById('calc__neuf');
var zeroBtn = document.getElementById('calc__zero');

var decimalBtn = document.getElementById('calc__decimal');
var clearBtn = document.getElementById('calc__clear');
var backspaceBtn = document.getElementById('calc__backspace');

var displayValElement = document.getElementById('calc__display__value');

// les valeurs sont retrouvé par le nom de classe, ce qui permet d'en attribuer plusieurs a la variable.
var calcNumBtns = document.getElementsByClassName('calc__btn__num');
var calcOperatorBtns = document.getElementsByClassName('calc__btn__operator');

var displayVal = '0'; //valeur par defaut 'zero' mais pourquoi en format string ?
var pendingVal; // valeur clickée
var evalStringArray = []; //contient l'operation

var updateDisplayVal = (clickObj) => {
var btnText = clickObj.target.innerText;
if (displayVal === '0'){
displayVal = "";
}
displayVal += btnText;
displayValElement.innerText = displayVal;
}

var performOperation = (clickObj)=> {
var operator = clickObj.target.innerText;
switch(operator){
case '+':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('+');
    break;
case '-':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('-');
    break;
case 'x':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('*'); 
    break;
case '/': 
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('/');
    break;
case '=': 
    evalStringArray.push(displayVal);
    var evaluation = eval(evalStringArray.join(''));// ['5', '+', '5'] une fois join = ['5+5']
    displayVal = evaluation + '';
    displayValElement.innerText = displayVal;
    evalStringArray = [];
    break;
default:
    break;
}
}
for (let i = 0; i < calcNumBtns.length; i++){
calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
for (let i = 0; i < calcOperatorBtns.length; i++){
calcOperatorBtns[i].addEventListener('click', performOperation, false)
}
clearBtn.onclick = ()=> {
// reset la calculette a zero
displayVal = '0';
pendingVal = undefined;
evalStringArray = [];
displayValElement.innerHTML = displayVal;
}
backspaceBtn.onclick = ()=> {
// permet de modifier la dernière saisie saisie
let lengthOfDisplayVal = displayVal.length;
displayVal = displayVal.slice(0, lengthOfDisplayVal - 1); 
if (displayVal === ""){
displayVal = '0';
}
displayValElement.innerText = displayVal; 
}
decimalBtn.onclick = ()=> {
if (!displayVal.includes('.'))
displayVal += '.';
displayValElement.innerText = displayVal;
}