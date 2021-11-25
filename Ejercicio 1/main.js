function main() {
  datos_arrays = azar()
  dato = datos()
  var intentos = 0
  var jugar_partida = prompt("Quieres Jugar a Mastermind? 1:Si 2:No")
  alert_output+("Tienes que adiviar los cinco numero en sus posiciones, si el número esta en la combinación se marcara con una X, si además la posición es correcta será O")
  alert(dato)
  do {
    (isRunning = true)
    if (jugar_partida == 1) {
      jugador = array_jugador()
      comprobador(jugador) 
      intentos++
      alert_output("Llevas " + intentos + " Intentos")
    }
    if (jugar_partida == 2) {
      (isRunning = false)
    }
    if (intentos == 10) {
      alert_output("Se han terminado los intentos")
      return main()
    }
  }
  while (isRunning)
}



main()

