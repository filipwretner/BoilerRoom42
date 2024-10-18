// Prompts för att ta emot inmatning av nummer
let firstNumber = parseFloat(prompt("Ange det första talet:"));
let secondNumber = parseFloat(prompt("Ange det andra talet:"));

let operation;
let result; 

// if-sats för att kolla om vi har rätt inmatning
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Felaktig inmatning, testa skriv in ett nummer istället!");
    console.log("Felaktig inmatning");
} else {

   // Prompts för att ta emot inmatning av operation
   operation = prompt("Vill du använda +, -, *, /, % eller **");

   // if-sats för att genomföra beräkningar

   // Addition
     if (operation === "+") {

        result = (firstNumber + secondNumber);
        alert(`Summan är: ${result}`);
        console.log(result);

   // Subraktion
     } else if (operation === "-") {

        result = (firstNumber - secondNumber);
        alert(`Differensen är: ${result}`);
        console.log(result);

   // Multiplikation   
     } else if (operation === "*") {

        result = (firstNumber * secondNumber);
        alert(`Produkten är: ${result}`);
        console.log(result);

   // Division
     } else if (operation === "/") {

      // Kollar så att vi inte delar med 0
        if (secondNumber !== 0) {

            result = (firstNumber / secondNumber);
            alert(`Kvoten är: ${result}`);
            console.log(result);

        } else {

         // Felmeddelande om vi delar med 0
            alert("Kan inte dela med 0.");
            console.log("Kan inte dela med 0");

        }
     
   // Modulus   
     } else if (operation === "%") {

        result = (firstNumber % secondNumber);
        alert(`Resterande är: ${result}`);
        console.log(result);

   // Exponentiering 
     } else if (operation === "**") {

        result = (firstNumber ** secondNumber);
        alert(`Exponenten är: ${result}`);
        console.log(result);

     } else {

      // Felmeddelande om användare skriver in fel vi val av operation
        alert("Ogiltig operation, använd +, -, *, /, % eller **");
        console.log("Ogiltig operation");
     }
}