//Fetch all buttons........
const buttons = document.querySelectorAll("button");

//Fetch input field value......
const inputField = document.getElementById("result");

const operators = ['%', '*', '-', '+', '/', '=', '.'];
//Add eventListner on each buttons..........
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        const buttonValue = buttons[i].textContent;

        if (buttonValue === "AC") {
            //clear result.......
            inputField.value = "";
        }
        else if(buttonValue === "⌫"){
            //delete single value from last.........
            inputField.value = inputField.value.slice(0, -1);
        }
        else if (inputField.value && buttonValue === "=") {
            //calculate value......
            inputField.value = eval(inputField.value);
        }
        else {
            //normal case -> append or concat value.......
            //if inputField is empty and pressing equalto operator......
            if(!inputField.value && operators.includes(buttonValue)){
                return;
            }

            //if last char is operator and new value is also operator, tb ka case........
            const lastChar = inputField.value.slice(-1);
            if(operators.includes(lastChar) && operators.includes(buttonValue)){
                inputField.value = inputField.value.slice(0, -1) + buttonValue;
            }
            else{
                inputField.value += buttonValue;
            }
        }
    });
}

