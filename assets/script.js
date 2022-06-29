//Solicitar la cantidad de productos que desea comprar
let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar"));

//Declaracion de variables, funcion y ciclo for

let carrito = 0
let ciclos = 0


function solicitarProductos(){
    let precio = parseFloat(prompt("Ingrese el precio de su producto: "))
    carrito = carrito + precio
    alert("La suma de su carrito es: " + carrito)
}

for (let ciclos = 1; ciclos <= cantidadProductos; ciclos++){
    solicitarProductos();

    if(cantidadProductos == ciclos){
        break
    }
}

//Declaracion de variables, funcion y algoritmo condicional

let codigoIngresado = false
let finalizarCompra = false


function aplicarDescuento(){
    carrito = carrito * 0.90
    alert("Descuento aplicado, la suma final de su carrito es: "+ carrito)
}

function preguntarCod(){
    let tieneCodigo = prompt("Tiene codigo de descuento? Si/No: ")
    if (tieneCodigo === "Si"){
        solicitarDescuento()
        pagar()
    }
    else {
        pagar()
    }
}

function solicitarDescuento(){
    let codigoDescuento = prompt("Ingrese su codigo de descuento: ")
    if (codigoDescuento === "TengoEl10" && codigoIngresado != true){
        aplicarDescuento()
        codigoIngresado = !codigoIngresado
        finalizarCompra = !finalizarCompra
    }
    else{
        alert("Error, código ingresado no válido, finalice compra")
        finalizarCompra = !finalizarCompra
    }
} 

function pagar(){
if (codigoIngresado && finalizarCompra){
    alert ("Pasar a finalizar compra, el monto final del carrito es: "+ carrito)
    }
}
