let angulo1 = parseFloat(prompt("ingrese el angulo 1"));
let angulo2 = parseFloat(prompt("ingrese el angulo 2"));
let angulo3 = parseFloat(prompt("ingrese el angulo 3"));
let triangulo = angulo1 + angulo2 + angulo3;

if (triangulo == 180) {
    console.log("los tres angulos pertenecen al triangulo");
}
else {
    console.log("los tres angulos no pertenecen al triangulo");
}

