function main() {
    var Jugar = prompt("Quieres jugar a El precio justo? 1:Si 2:No")
    do {
        (isRunning = true)
        if (Jugar == 1) {
            alert("Tienes que adiviar los precios de los objetos que se anuncien por pantalla sin pasarte")
            Numero_Aleatorio = genereador_precios()
            var Random = items()
            if (Random == lavadora) {
                var precio_jugador = prompt("Precio para lavadora")
                Numero_Aleatorio = Numero_Aleatorio * (900) - (400)
            }
            else if (Random == pc) {
                var precio_jugador = prompt("Precio para Pc")
                Numero_Aleatorio = Numero_Aleatorio * (1400) - (1000)
            }
            else if (Random == movil) {
                var precio_jugador = prompt("Precio para movil")
                Numero_Aleatorio = Numero_Aleatorio * (450) - (150)
            }
            else if (Random == microondas) {
                var precio_jugador = prompt("Precio para microondas")
                Numero_Aleatorio = Numero_Aleatorio * (350) - (100)
            }
            if (precio_jugador <= Numero_Aleatorio) {
                alert("Enhorabuena has acertado")
            }
            else {
                alert("Has fallado")
                return main()
            }
        }
        if (Jugar == 2) {
            isRunning = false
        }
    }
    while (isRunning == true)
}
main()