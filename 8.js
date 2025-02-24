let dias = Number(prompt("Ingrese la cantidad de días de su membresía (15, 30 o 90):"));

let costo;
if (dias === 15) {
    costo = 18000;
} else if (dias === 30) {
    costo = 35000;
} else if (dias === 90) {
    costo = 86000;
} else {
    alert("Ingrese una cantidad válida de días.")
}

let n= costo.toLocaleString("es-ES")
alert(`El costo de su mensualidad es: ${n} pesos`)