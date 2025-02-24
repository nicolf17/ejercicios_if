let mensaje= alert("Bienvenido a nuestro servicio de lavado !!")
let cantidad= prompt("Ingrese cuantas lavadoras desea utilizar: ")
let horas= prompt("Ingrese la cantidad de horas que desea utilizar el servicio: ")
let alquiler= prompt("¿Que tipo de lavadora desea usar? 1. Lavadora grande / 2. Lavadora pequeña")

let lavadora1= ("lavadora grande")
let lavadora2= ("lavadora pequeña")
let total, descuento, totalDescuento

if(alquiler==1){
    total= horas* 4000
    if (cantidad>3){
        descuento= total*0.03
        totalDescuento= total-descuento
        alert(`Costo total por alquilar ${cantidad} lavadora/s  de tipo ${lavadora1}, por ${horas} hora/s es de: ${totalDescuento} pesos`)
        document.write(`Costo total por alquilar ${cantidad} lavadora/s  de tipo ${lavadora1}, por ${horas} hora/s es de: ${totalDescuento} pesos`)
    }else{
        alert(`Costo total por alquilar ${cantidad} lavadora/s  de tipo ${lavadora1}, por ${horas} hora/s es de: ${total} pesos`)
        document.write(`Costo total por alquilar ${cantidad} lavadora/s  de tipo ${lavadora1}, por ${horas} hora/s es de: ${total} pesos`)
    }

}else if(alquiler==2){
    total= horas* 3000
    if(cantidad>3){
        descuento= total*0.03
        totalDescuento= total-descuento
        alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${lavadora2}, por ${horas} hora/s es de: ${totalDescuento} pesos`)
        document.write(`Costo total por alquilar ${cantidad} lavadoras tipo ${lavadora2}, por ${horas} hora/s es de: ${totalDescuento} pesos`)
    }else{
        alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${lavadora2}, por ${horas} hora/s es de: ${total} pesos`)
        document.write(`Costo total por alquilar ${cantidad} lavadoras tipo ${lavadora2}, por ${horas} hora/s es de: ${total} pesos`)
    }
    
}