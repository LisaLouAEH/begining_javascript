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

var calcNumBtns = document.getElementsByClassName('calc__btn__num');
var calcOperatorBtns = document.getElementsByClassName('calc__btn__operator');

var displayVal = 0; //valeur par defaut 'zero'
var pendingVal; // valeur clickée
var evalStringArray = []; //contient l'operation

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;
    if (displayVal === 0){
        displayVal = "";
    }
    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

for (let i = 0; i < calcNumBtns.length; i++){
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
/*for (let i = 0; i < calcOperatorBtns.length; i++){
    calcOperatorBtns[i].addEventListener('click', performOperation, false)
}*/