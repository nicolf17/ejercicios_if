let modelo = Number(prompt("Ingrese el número de modelo de su automóvil:"));

if (modelo === 119 || modelo === 179 || (modelo >= 189 && modelo <= 195) || modelo === 221 || modelo === 780) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no está defectuoso.");
}