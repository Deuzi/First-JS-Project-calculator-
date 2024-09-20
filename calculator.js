const clearButton = document.getElementById('clear-btn');

const textArea = document.getElementById('number-inputs')

const calculateButton = document.getElementById('equal-to')

let numberButton = document.querySelectorAll('.numb-btn');

let operatorButton = document.querySelectorAll('.operator-btn');


function appendNumbers(number){
    if(textArea.value === "0"){
        textArea.value = number;
    }else{
        textArea.value += number;
    };
};

function appendOperators(operator){
    textArea.value += operator;
}

function calculate () {
    try{
        textArea.value = eval(textArea.value);
    } catch(error){
        textArea.value = "error"
    };
};

function clearTextArea () {
    textArea.value = "0";
};

numberButton.forEach ( button => {
    button.addEventListener('click', () => {
        appendNumbers(button.getAttribute('data-value'))
    });
});


operatorButton.forEach ( button => {
    button.addEventListener('click', () => {
        appendOperators(button.getAttribute('data-value'))
    });
});

clearButton.addEventListener ('click', clearTextArea);

calculateButton.addEventListener('click', calculate);





