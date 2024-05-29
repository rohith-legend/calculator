const but = document.getElementsByTagName("button");
for (let i=0;i<but.length;i++) {
    let element = but.item(i);
    console.log(element.textContent);
    element.addEventListener("click",() => {alert("hello");});
    }
