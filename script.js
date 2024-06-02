

function resultx(button) {
        let val = parseFloat(display.textContent);
        if (operator == "add") result = val + prevInp;
        if (operator == "multiply") result = val * prevInp;
        if (operator == "subtract") result = prevInp - val;
        if (operator == "divide") {
            if (val == 0) {
                return "err";
            }
            else {
                result = prevInp/val;
            }
        }
}
function changeDisplay(button) {
    const classes = button.className.split(" ");
    console.log(result);
    if (classes.includes("digit")) {
        if (!newx) display.textContent += button.textContent;
        else {
            display.textContent = "";
            display.textContent += button.textContent;
            newx = false;
        }
    }
   else { 
        if (button.id != "res") {
            if (operator=="") {
                operator = button.id;
                prevInp = parseFloat(display.textContent);
                display.textContent = "";
            }
            else {
                resultx(button);
                operator = button.id;
                prevInp = result;
                result = Math.round((result*1000))/1000;
                display.textContent = "";
            }
        }
        else {
            if (resultx(button)=="err") {
                display.textContent = "Error";
                newx = true;
                prevInp = "";
                operator = "";
                return;
            }
            result = Math.round((result*1000))/1000
            console.log(prevInp,operator,result);
            operator = "";
            display.textContent = result;
            newx = true;
        }
   }
}

const but = document.getElementsByTagName("button");
const display = document.getElementById("display");

for (let i=0;i<but.length;i++) {
    let element = but.item(i);
    element.addEventListener("click",(event)=> { changeDisplay(event.target)} );
    }

let operator = "";
let prevInp = "";
let result;
let newx = false;
