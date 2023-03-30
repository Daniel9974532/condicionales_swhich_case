let cantidad = parseFloat(prompt("Ingrese la cantidad:"));

let porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular:"));

let resultado = (cantidad * porcentaje) / 100;

console.log("El ", porcentaje, " % ", "de la cantidad ", cantidad, "es ", resultado);