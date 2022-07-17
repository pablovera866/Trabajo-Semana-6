let nombre = "Programación" + " Fácil. ";
let saludo = "Les doy la bienvenida a ";
let variableAgregada = "Mi nombre es Pablo";
let fraseCompleta = saludo + nombre + variableAgregada;

console.log(fraseCompleta);


let frase = "JavaScript " + "es un lenguaje " + "esencial para crear" + " sitios web poderosos.";

console.log(frase);


let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";

let concatenaNumeros = numeroString1 + " " + numeroString2 + " " + numeroString3;
console.log(concatenaNumeros);


var names = prompt("Nombre:");
console.log(names);
var age = prompt("Edad:");
console.log(age);
var sex = prompt("Sexo (H o M)): ")
console.log(sex);

console.warn ("Nombre:" + names);
console.warn ("Edad:" + age);
console.warn ("Edad:" + sex);


if (sex == "H"){
    if (age >= 18){
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }
}

if (sex == "M"){
    if (age >= 20){
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }
}
