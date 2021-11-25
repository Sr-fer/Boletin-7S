function main() {
    var Jugar = prompt("Quieres jugar a El precio justo? 1:Si 2:No")
    do {
        (isRunning = true)
        if (Jugar == 1) {
            alert("Tienes que adiviar los precios de los objetos que se anuncien por pantalla sin pasarte")
            Numero_Aleatorio = genereador_precios()
            var Random = items()
            if (Random == lavadora) {
                Numero_Aleatorio = Numero_Aleatorio * (900) - (400)
            }
            else if (Random == pc) {
                Numero_Aleatorio = Numero_Aleatorio * (1400) - (1000)
            }
            else if (Random == movil) {
                Numero_Aleatorio = Numero_Aleatorio * (450) - (150)
            }
            else if (Random == microondas) {
                Numero_Aleatorio = Numero_Aleatorio * (350) - (100)
            }
            alert(Random)
            var precio_jugador = prompt("Precio para " + Random)
            if (precio_jugador <= Numero_Aleatorio) {
                alert("Enhorabuena has acertado")
            }
            else {
                alert("Has fallado")
                return main()
            }
            if (Jugar == 2) {
                isRunning = false
            }
        }
    }
    while (isRunning == true)
}
main()