function items() {
    var Items = [lavadora, pc, movil, microondas]
    var Random = Items[Math.floor(Math.Random() * Items.length)]


    return Random
}
