const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
buttons.forEach(button => {
    if (button.innerText == "=") {
        button.addEventListener("click", (e) => calculate())
    }
    else if (button.innerText == "+" | button.innerText == "-" | button.innerText == "x" | button.innerText == "/") {
        button.addEventListener("click", (e) => checkOperator(e.target.innerText))
    }
    else {
        button.addEventListener("click", (e) => updateDisplay(e.target.innerText))
    }
});


function updateDisplay(num) {
    if (num == "clear" | num == "=") {
        display.innerText = ""
    }
    else {
        display.innerText += num
    };
};

function sum(array) {
    equation = display.innerText.split("+")
    answer = ((parseInt(equation[0] * 10000) + parseInt(equation[1]*10000))/10000)
    return answer
};

function subtract(array) {
    equation = display.innerText.split("-")
    answer = equation[0] - equation[1]
    return answer
};

function multiply(array) {
    equation = display.innerText.split("x")
    answer = equation[0] * equation[1]
    return answer
};

function divide(array) {
    equation = display.innerText.split("/")
    if (equation[1] == 0) {
        alert("Come on man :(")
        return "0"
    }
    answer = equation[0] / equation[1]
    return answer
};

function checkForOperator() {
    array = display.innerText.split("")
    lastItem = array.slice(-1)
    if (lastItem == "+" | lastItem == "-" | lastItem == "x" | lastItem == "/") {
        return true
    }
    else {
        return false
    }
}

let operatorCalls = 0
function checkOperator(operator) {
    if (checkForOperator() == false) {
        operatorCalls+=1
        if (operatorCalls > 1) {
            calculate()
            display.innerText += operator
            operatorCalls = 1
        }
        else {
            display.innerText += operator
        };
    }
    else {
        return
    }
}


function calculate() {
    array = display.innerText.split("")
    for (i of array) {
        if (i == "+") {
            display.innerText = sum(array)
        }
        else if (i == "-") {
            display.innerText = subtract(array)        
        }
        else if (i == "x") {
            display.innerText = multiply(array) 
        }
        else if(i == "/") {
            display.innerText = divide(array) 
        }
    }
};