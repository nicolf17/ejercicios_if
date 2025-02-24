let nombre= prompt("Ingrese su nombre: ")
let horas= Number(prompt("Ingrese la cantidad de horas que trabajo esta semana:"))
let salario= horas*30000
let salarioHorasExtra=horas*33000

if(horas>10){
    alert(`Señor/a ${nombre}, el numero de horas es ${horas} y su salario es de: `+ salarioHorasExtra)
    console.log(`Señor/a ${nombre}, el numero de horas es ${horas} y su salario es de: `+ salarioHorasExtra)
    document.write(`Señor/a ${nombre}, el numero de horas es ${horas} y su salario es de: `+ salarioHorasExtra)
}else if(horas>0 && horas<=10){
    alert(`Señor/a ${nombre}, el numero de horas es ${horas} y su salario es de: `+ salario)
    console.log(`Señor/a ${nombre}, el numero de horas es ${horas} y su salario es de: `+ salario)
    document.write(`Señor/a ${nombre}, el numero de horas es ${horas} y su salario es de: `+ salario)
}else if(horas==0){
    alert("Si no has trabajado, no hay sueldo")
    console.log("Si no has trabajado, no hay sueldo")
    document . write("Si no has trabajado, no hay sueldo")
}else{
    alert("...")
    console.log("...");
    document.write("...")
}
