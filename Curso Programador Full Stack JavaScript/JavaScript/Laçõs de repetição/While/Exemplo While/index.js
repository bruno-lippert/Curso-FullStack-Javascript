/*
let velocity = 50, acceleration = 5

while (velocity <= 100) {
    alert("Acelereando a "+velocity+"km/h")
    velocity += acceleration
}
*/

let constellation = "Andromeda"
let pos = 0
let constellationLenght = constellation.length

while (pos < constellationLenght){
    if (constellation[pos] == "a" || constellation[pos] == "A") {
        alert(pos)
    }
    pos++
}