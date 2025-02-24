let pitido = prompt("¿La computadora emite un pitido al encender? (si/no)").toLowerCase();
let discoGira = prompt("¿El disco duro gira? (si/no)").toLowerCase();

if (pitido === "si" && discoGira === "si") {
    alert("Póngase en contacto con el técnico de apoyo.");
} else if (pitido === "si" && discoGira === "no") {
    alert("Verificar contactos de la unidad.");
} else if (pitido === "no" && discoGira === "no") {
    alert("Traiga la computadora para repararla en la central.");
} else if (pitido === "no" && discoGira === "si") {
    alert("Compruebe las conexiones de altavoces.");
} else {
    alert("Responda con 'si' o 'no'.");
}