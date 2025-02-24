let genero="femenino"
let edad=30

let ayuda

if (genero==="femenino"){
}if(edad>50){
    ayuda=120000
}else if(edad>=30){
    ayuda=100000
}else if(edad<30){
    ayuda= "No aplica"
}else{
    ayuda=40000
}

let n=ayuda.toLocaleString("es-ES")
console.log(`El valor de la ayuda mensual es de: ${n} pesos`);
