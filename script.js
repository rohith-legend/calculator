function digit(button) {
    if (!err && !n) {
        display.textContent += button.textContent;
        content = parseInt(display.textContent);
    }
    else if (err) {
        display.textContent="";
        display.textContent += button.textContent;
        content = parseInt(display.textContent);
        err = false;
    }
    else if (n) {
        display.textContent="";
        display.textContent += button.textContent;
        content = parseInt(display.textContent);
        n = false;
    }
    
}

function operate(button) {
    if (button.id== "add") {
        if(content != null) {
            if (variable == null) {
                variable = content;
                content = null;
                mult = false;
                add=true;
                display.textContent = "";
            }
            else {
                add = true;
                mult = false;
                variable += content;
                content = variable;
                display.textContent = variable;
                content = null;
                n = true;
            }
        }
    }
    else if (button.id == "multiply") {
        if (variable == null) {
            variable = content;
            content = null;
            add = false;
            mult=true;
            display.textContent = "";
        }
        else {
            variable *= content;
            content = variable;
            display.textContent = variable;
            content = null;
            n = true;
            add = false;
            mult = true;
        }
    }
    else if (button.id == "res") {
        if (add) {
            variable += content;
            content = variable;
            display.textContent = content;
            n = true;
            variable = null;
        }
        if (mult) {
            variable *= content;
            content = variable;
            display.textContent = content;
            n = true;
            variable = null;
        }
    }
}
function changeDisplay(event) {
    const classes = event.target.className.split(' ');
    if (classes.includes("digit")) digit(event.target);
    else operate(event.target);
}

const but = document.getElementsByTagName("button");
const display = document.getElementById("display");

let n = true;
let content = null;
let variable = null;
let result = null;
let err = false;
let add = false;
let mult = false;

for (let i=0;i<but.length;i++) {
    let element = but.item(i);
    element.addEventListener("click",(event)=> { changeDisplay(event)} );
    }
