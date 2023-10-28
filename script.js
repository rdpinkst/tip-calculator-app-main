const listButton = document.querySelectorAll(".percent");
const totalInput = document.querySelector("#total");
const totalPeople = document.querySelector("#people");
const resetCalc = document.querySelector("#reset");
const customTip = document.querySelector("#percent-input");
const warningMessage = document.querySelector('#warning')

let tip = 0;
let bill = 0;
let person = 0;
let amount = 0.00;
let total = 0.00;

function getTip(e) {
    const percent = e.target.textContent ? e.target.textContent: e.target.value;
    const percentNumber = parseInt(percent.split("%")[0]);
    removeSelected();
    if(e.target.textContent) {
        customTip.value = "";
        e.target.classList.toggle("selected")
    } else {
        e.target.classList.toggle("selected-input")
    }
    tip = percentNumber / 100;
    calcOutputs(bill, tip, person);    
}

function removeSelected() {
    for(let button of listButton) {
        button.classList.remove("selected");
    }
    customTip.classList.remove("selected-input");
}

function getNumber(e) {
    const number = e.target.value;
    e.target.setAttribute("value", number.toString());
    // removeFirstZero(e.target)
    bill = parseFloat(number);
    calcOutputs(bill, tip, person);   
}

function removeFirstZero(element) {
    if(element.value[0] === "0") {
        element.setAttribute("value", "0");
        element.value = element.value.slice(1);
    }
}

for(let button of listButton) {
    button.addEventListener("click", getTip)
}
// Add eventlistener to custom input
customTip.addEventListener("keyup", getTip)

totalInput.addEventListener("keyup", getNumber);
totalPeople.addEventListener("keyup", (e) => {
    const numbPeople = e.target.value;
    console.log(numbPeople.length)
    if(numbPeople.length === 1 && numbPeople === '0') {
        warningMessage.classList.remove("hide");
    } else {        
        warningMessage.classList.add("hide");
    } 
    // removeFirstZero(e.target)
    totalPeople.setAttribute("value", numbPeople);
    person = parseInt(numbPeople);
    calcOutputs(bill, tip, person);
})

function calcOutputs(bill, tip, guests) {
    if(bill && tip && guests) {
        amount = Math.round(((bill * tip) / guests) * 100) / 100;
        total = (Math.round((bill / guests) * 100) / 100) + amount;
        changeDOM("tip", amount);
        changeDOM("totalOutput", total); 
    }
    
}
function changeDOM(id, number) {
    const element = document.getElementById(id);
    element.textContent = "$" + number.toFixed(2);
}
function reset() {
    tip = 0;
    bill = 0;
    person = 0;
    amount = 0.00;
    total = 0.00;

    // Get rid of tip
    removeSelected();
    totalInput.setAttribute("value", "0");
    totalPeople.setAttribute("value", "0");
    warningMessage.classList.add("hide");
    totalInput.value = "";
    totalPeople.value = "";
    customTip.value = "";
    changeDOM("tip", 0);
    changeDOM("totalOutput", 0);
}

resetCalc.addEventListener("click", reset);