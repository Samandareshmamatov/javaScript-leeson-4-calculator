while (true) {
    let number1 = Number(prompt("1-sonni kiriting : "));
    let action = prompt("Arifmetik amalni kiriting : ");
    let number2 = Number(prompt("2-sonni kiriting : "));
    if (action == "+") {
        alert(`${number1} + ${number2} = ${number1+number2}`);
    } else if (action == "-") {
        alert(`${number1} - ${number2} = ${number1-number2}`);
    } else if (action == "*") {
        alert(`${number1} * ${number2} = ${number1*number2}`);
    } else if (action == "/") {
        alert(`${number1} / ${number2} = ${number1/number2}`);
    } else {
        alert("Arifmetik amalni tog'ri kiriting !!!")
    }
}