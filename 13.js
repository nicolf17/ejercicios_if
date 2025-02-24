let operador = prompt("Ingrese su operador (Tigo, Claro o Movistar):").toLowerCase();
let minutos = Number(prompt("Ingrese los minutos internacionales consumidos:"));

let cargoFijo, costoMinuto, paqueteDatos;

if (operador === "tigo") {
    cargoFijo = 45000;
    costoMinuto = 200;
    paqueteDatos = 12000;
} else if (operador === "claro") {
    cargoFijo = 30000;
    costoMinuto = 100;
    paqueteDatos = 18000;
} else if (operador === "movistar") {
    cargoFijo = 40000;
    costoMinuto = 250;
    paqueteDatos = 8000;
} else {
    alert("Operador no válido.");
}

let costoMinutos = minutos * costoMinuto;
let total = cargoFijo + costoMinutos + paqueteDatos;
let n= total.toLocaleString("es-ES")
alert(`Su total a pagar es: ${n} pesos`);
