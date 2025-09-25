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

function checkSyntax(array) {
    firstItem = array.shift()
    if (firstItem == "+" | firstItem == "-" | firstItem == "x" | firstItem == "/") {
        return false
    }
    else {
        return true
    }
};

function sum(array) {
    if (checkSyntax(array) == true) {
        equation = display.innerText.split("+")
    }
    else {
        equation = array.join("").split("+")
    }
    answer = parseFloat(equation[0]) + parseFloat(equation[1])
    return answer
};

function subtract(array) {
    if (checkSyntax(array) == true) {
        equation = display.innerText.split("-")
    }
    else {
        equation = array.join("").split("-")
    }
    answer = equation[0] - equation[1]
    return answer
};

function multiply(array) {
    if (checkSyntax(array) == true) {
        equation = display.innerText.split("x")
    }
    else {
        equation = array.join("").split("x")
    }
    answer = equation[0] * equation[1]
    return answer
};

function divide(array) {
    if (checkSyntax(array) == true) {
        equation = display.innerText.split("/")
    }
    else {
        equation = array.join("").split("/")
    }
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
        if (operatorCalls > 1) {
            calculate()
            display.innerText += operator
            operatorCalls = 1
        }
        else if (display.innerText != "") {
            display.innerText += operator
            operatorCalls+=1
            console.log(display.innerText)
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