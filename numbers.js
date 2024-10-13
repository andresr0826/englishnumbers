let wordsArray = [];
let numberArray = [];
let indice = 0;

// Función para convertir números a palabras en inglés
function numberToWords(num) {
    const belowTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
                         "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", 
                         "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (num < 20) {
        return belowTwenty[num];
    } else if (num < 100) {
        return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + belowTwenty[num % 10] : "");
    } else if (num < 1000) {
        return belowTwenty[Math.floor(num / 100)] + " hundred" + (num % 100 !== 0 ? " " + numberToWords(num % 100) : "");
    } else if (num < 1000000) {
        return numberToWords(Math.floor(num / 1000)) + " thousand" + (num % 1000 !== 0 ? " " + numberToWords(num % 1000) : "");
    } else if (num === 1000000) {
        return "one million";
    }
}

// Llenar los arrays de números en palabras y números arábigos
for (let i = 0; i <= 1000000; i++) {
    wordsArray.push(numberToWords(i));  // Números en palabras
    numberArray.push(i);                 // Números arábigos
}

function ejecutar() {
    // Generar un número aleatorio entre 0 y 1,000,000
    indice = Math.floor(Math.random() * 1000001);
    let etiqueta = document.createElement("h3");
    let pregunta = document.createTextNode("Escribe en inglés: " + numberArray[indice]);
    etiqueta.appendChild(pregunta);
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultados anteriores
    document.getElementById("resultado").appendChild(etiqueta);
}

function comprobar() {
    let respuesta = document.getElementById("respuesta").value.trim();
    let etiqueta;

    if (wordsArray[indice] === respuesta) {
        etiqueta = document.createElement("p");
        etiqueta.textContent = "Correcto. Así se hace Aura.";
        etiqueta.style.backgroundColor = "green";
    } else {
        etiqueta = document.createElement("p");
        etiqueta.textContent = "Oh no. La respuesta correcta es: " + wordsArray[indice];
        etiqueta.style.backgroundColor = "red";
    }
    document.getElementById("resultado").appendChild(etiqueta);

}

function mostrarRespuesta() {
    let etiqueta = document.createElement("p");
    etiqueta.textContent = "La respuesta correcta es: " + wordsArray[indice];
    document.getElementById("resultado").appendChild(etiqueta);
    etiqueta.style.backgroundColor = "grey";
}

