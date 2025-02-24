function pedirNota(materia){
    let pedirNota
    do{
        nota= Number(prompt(`Ingrese su calificacion de ${materia} (0-10): `))
    } while (isNaN(nota) || nota<0 || nota>10)
        return nota
}

let fisica= pedirNota("fisica")
let quimica= pedirNota("quimica")
let biologia= pedirNota("biologia")
let matematicas= pedirNota("matematicas")
let informatica= pedirNota("inofrmatica")

let calificacion
let porcentaje= ((fisica+quimica+biologia+matematicas+informatica)/50)*100

if (porcentaje>80){
    calificacion= ("excelente")

}else if(porcentaje>=60){
    calificacion= ("buena")

}else{
    calificacion= ("mala")
}

alert(`Tu porcentaje es del ${porcentaje}% y tu calificacion es ${calificacion}`)