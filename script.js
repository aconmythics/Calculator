const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
buttons.forEach(button => {
    if (button.innerText == "=") {
        button.addEventListener("click", (e) => calculate())
    }
    else if (button.innerText == "+" | button.innerText == "-" | button.innerText == "x" | button.innerText == "/") {
        button.addEventListener("click", (e) => checkOperator(e.target.innerText))
    }
    else if (button.innerText == ".") {
        button.addEventListener("click", checkDecimal)
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


function checkDecimal() {
    array = display.innerText.split(/[\+\-\x\/]/)
    lastNum = array[array.length-1]
    console.log(lastNum)
    if (lastNum == "") {
        display.innerText += "0."
    }
    else if (lastNum.includes(".")) {
        return
    }
    else {
        display.innerText += "."
    }
};

function sum() {
    equation = display.innerText.split("+")
    answer = parseFloat(equation[0]) + parseFloat(equation[1])
    return answer
};

function subtract(array, sign) {
    equation = array.join("").split("-")
    answer = (equation[0] * sign) - equation[1]
    return answer
};

function multiply() {
    equation = display.innerText.split("x")
    answer = equation[0] * equation[1]
    return answer
};

function divide() {
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
    if (lastItem == "+" | lastItem == "-" | lastItem == "x" | lastItem == "/" | lastItem == "." | lastItem == "") {
        return true
    }
    else {
        return false
    }
}

let operatorCalls = 0
function checkOperator(operator) {
    if (checkForOperator() == false) {
        operatorCalls+=1;
        if (operatorCalls > 1) {
            calculate()
            display.innerText += operator
            operatorCalls = 1
        }
        else if (display.innerText != "") {
            display.innerText += operator
        };
    }
    else {
        return
    }
}


function calculate() {
    sign = 1
    array = display.innerText.split("")
    if (array[0] == "-") {
        sign = -1
        array.shift()
    }
    for (i of array) {
        if (i == "+") {
            display.innerText = sum()
        }
        else if (i == "-") {
            display.innerText = subtract(array, sign)        
        }
        else if (i == "x") {
            display.innerText = multiply() 
        }
        else if(i == "/") {
            display.innerText = divide() 
        }
    }
};