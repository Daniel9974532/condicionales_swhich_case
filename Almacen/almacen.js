let precio = parseFloat(prompt("Ingrese el precio del electrodoméstico:"));
let plazo = parseInt(prompt("Ingrese el plazo en meses para pagarlo a crédito:"));

let precioCredito = precio * 1.25;
let cuotaMensual = precioCredito / plazo;

console.log("El valor fijo de las cuotas mensuales será de $" , cuotaMensual);