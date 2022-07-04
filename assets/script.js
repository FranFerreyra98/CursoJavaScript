//Solicitar la cantidad de productos que desea comprar
let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar"));

//Declaracion de clase y método constructor 

class Producto {
    constructor(nombre, precio, tipo) {
        this.nombre  = nombre
        this.precio  = precio
        this.tipo = tipo
        this.vendido = false;
    }

    extraerIva() {
        this.iva = this.precio * .21;
        alert("El iva de su producto es: "+ this.iva)
    }

}

//Declaracion de array y nuevos objetos

const productos = [];

productos.push(new Producto("Aconcagua", 2200, "Gin"))
productos.push(new Producto("Absolut", 3000, "Vodka"))
productos.push(new Producto("Branca", 950, "Fernet"))

const listaNombres = productos.map((producto) => producto.nombre);
const listaPrecios = productos.map((producto) => producto.precio);

function mostrarProductos(){
    alert("Los productos disponibles son: " + listaNombres)
}

function mostrarPrecio(){
    alert("Los precios de los productos son: " + listaPrecios)
}

//Declaracion de variables, funcion y ciclo for

let carrito = 0
let ciclos = 0


function solicitarProductos(){
    let precio = parseFloat(prompt("Ingrese el precio de su producto: "))
    carrito = carrito + precio
    alert("La suma de su carrito es: " + carrito)
}

for (let ciclos = 1; ciclos <= cantidadProductos; ciclos++){
    mostrarProductos()
    mostrarPrecio()
    solicitarProductos()
}

//Declaracion de variables, funcion y algoritmo condicional

let codigoIngresado = false
let finalizarCompra = false

function preguntarCod(){
    let tieneCodigo = prompt("Tiene codigo de descuento? Si/No: ")
    if (tieneCodigo == "Si"){
        solicitarDescuento()
        pagar()
    }
    else {
        codigoIngresado = !codigoIngresado
        finalizarCompra = !finalizarCompra
        pagar()
    }
}

function aplicarDescuento(){
    carrito = carrito * 0.90
    alert("Descuento aplicado, la suma final de su carrito es: "+ carrito)
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

preguntarCod()
