let numbers = [17, 31, 77, 20, 63];

let userInputElement = document.getElementById("userInput");
let indexOfNumberElement = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let userInput = userInputElement.value;
    
    if(userInput === "") {
        alert("Please enter the number");
        return;
    }else {
        let index = numbers.findIndex(function(eachElement){
            if (eachElement === parseFloat(userInput)) {
                return true;
            }else {
                return false;
            }
        });
        indexOfNumberElement.textContent = index;
        
        userInputElement.value = "";
    }
}