let copias = Number(prompt("Ingrese la cantidad de copias que desea imprimir:"));
let precioPorCopia;

if (copias >= 0 && copias <= 499) {
    precioPorCopia = 120;
} else if (copias >= 500 && copias <= 749) {
    precioPorCopia = 100;
} else if (copias >= 750 && copias <= 999) {
    precioPorCopia = 80;
} else if (copias >= 1000) {
    precioPorCopia = 50;
} else {
    alert("Número de copias no válido.");
}


let total = copias * precioPorCopia;
let n=total.toLocaleString("es-ES")
alert(`El precio por copia es $${precioPorCopia}. El costo total es: ${n} pesos`);
