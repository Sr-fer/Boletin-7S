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
      var indice0 = dato.includes(jugador[0])
      var indice1 = dato.includes(jugador[1])
      var indice2 = dato.includes(jugador[2])
      var indice3 = dato.includes(jugador[3])
      var indice4 = dato.includes(jugador[4])
      if (jugador[0] == dato[0]) {
        alert_output(jugador[0] + " O")
      }
      else if (indice0 == true) {
        alert_output(jugador[0] + " X")
      }
      else {
        alert_output(jugador[0] + " -")
      }
      if (jugador[1] == dato[1]) {
        alert_output(jugador[1] + " O")
      }
      else if (indice1 == true) {
        alert_output(jugador[1] + " X")
      }
      else {
        alert_output(jugador[1] + " -")
      }
      if (jugador[2] == dato[2]) {
        alert_output(jugador[2] + " O")
      }
      else if (indice2 == true) {
        alert_output(jugador[2] + " X")
      }
      else {
        alert_output(jugador[2] + " -")
      }
      if (jugador[3] == dato[3]) {
        alert_output(jugador[3] + " O")
      }
      else if (indice3 == true) {
        alert_output(jugador[3] + " X")
      }
      else {
        alert_output(jugador[3] + " -")
      }
      if (jugador[4] == dato[4]) {
        alert_output(jugador[4] + " O")
      }
      else if (indice4 == true) {
        alert_output(jugador[4] + " X")
      }
      else {
        alert_output(jugador[4] + " -")
      }
      if (jugador[0] == dato[0] && jugador[1] == dato[1] && jugador[2] == dato[2] && jugador[3] == dato[3]  && jugador[4] == dato[4]) {
        alert_output("Has acertato")
        return main()
      }
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

