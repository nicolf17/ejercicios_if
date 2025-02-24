let tamaño = prompt("¿Desea un sándwich pequeño o grande?").toLowerCase();
let costoBase

if (tamaño === "pequeño") {
    costoBase = 6000;
} else if (tamaño === "grande") {
    costoBase = 12000;
} else {
    alert("Tamaño no válido.");
}

if (costoBase > 0) {
    let total = costoBase;

    let precioTocineta=3000
    let precioJalapeño= 0
    let precioPavo=3000
    let precioQueso= 2500
    

    if (prompt("¿Desea agregar tocineta? (si/no)").toLowerCase()) {
        total += precioTocineta;
    }
    if (prompt("¿Desea agregar jalapeño? (si/no)").toLowerCase()) {
        total += precioJalapeño;
    }
    if (prompt("¿Desea agregar pavo? (si/no)").toLowerCase()) {
        total += precioPavo;
    }
    if (prompt("¿Desea agregar queso? (si/no)").toLowerCase()) {
        total += precioQueso;
    }


    let n= total.toLocaleString("es-ES")
    alert(`El total a pagar por su sándwich es: $${n} pesos`)
}
