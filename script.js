// Prompts för att ta emot inmatning
let firstNumber = parseFloat(prompt("Ange det första talet:"));
let secondNumber = parseFloat(prompt("Ange det andra talet:"));

let operation;
let result; 

// if-sats för att kolla om vi har rätt inmatning
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Felaktig inmatning, testa skriv in ett nummer istället!");
    console.log("Felaktig inmatning");
} else {
     operation = prompt("Vill du använda +, -, *, /, % eller **");

     if (operation === "+") {
        result = (firstNumber + secondNumber);
        alert(`Summan är: ${result}`);
        console.log(result);
     } else if (operation === "-") {
        result = (firstNumber - secondNumber);
        alert(`Differensen är: ${result}`);
        console.log(result);
     } else if (operation === "*") {
        result = (firstNumber * secondNumber);
        alert(`Produkten är: ${result}`);
        console.log(result);
     } else if (operation === "/") {
        if (secondNumber !== 0) {
            result = (firstNumber / secondNumber);
            alert(`Kvoten är: ${result}`);
            console.log(result);
        } else {
            alert("Kan inte dela med 0.");
            console.log("Kan inte dela med 0");
        }
     } else if (operation === "%") {
        result = (firstNumber % secondNumber);
        alert(`Resterande är: ${result}`);
        console.log(result);
     } else if (operation === "**") {
        result = (firstNumber ** secondNumber);
        alert(`Exponenten är: ${result}`);
        console.log(result);
     } else {
        alert("Ogiltig operation, använd +, -, *, /, % eller **");
        console.log("Ogiltig operation");
     }
}