var Premio = function (nombre, precio, rango_mayor, rango_menor) {
    this.nombre = nombre
    this.precio = precio
    this.rango_mayor = rango_mayor
    this.rango_menor = rango_menor
}

var lavadora = new Premio("Lavadora", 650, 900, 400)
var pc = new Premio("Pc", 1200, 1400, 1000)
var movil = new Premio("Movil", 300, 450, 150)
var microondas = new Premio("Microondas", 200, 350, 100)
