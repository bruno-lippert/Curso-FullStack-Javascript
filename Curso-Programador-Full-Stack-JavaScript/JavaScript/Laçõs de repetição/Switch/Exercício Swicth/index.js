let lightYear, convertOption, calcPc, calcAu, calcKm
 
lightYear = prompt("Qual a distância em anos-luz?")
convertOption = prompt("Qual a unidade de medida em que deseja converter?\n1 - Parse (pc)\n2 - Unidade astronomica (AU)\n3 - Quilômetros (km)")

calcPc = 0.306601 * lightYear
calcAu = 63241.1 * lightYear
calcKm = (9.5 * Math.pow(10, 12)) * lightYear

switch (convertOption) {
    case "1":
        alert("Distância em Anos-luz: "+lightYear+"\nDistância em Parse (pc): "+calcPc)
        break
    case "2":
        alert("Distância em Anos-luz: "+lightYear+"\nDistância em Unidade astronomica (AU): "+calcAu)
        break
    case "3":
        alert("Distância em Anos-luz: "+lightYear+"\nDistância em Quilômetros (km): "+calcKm)
        break
    default:
        alert("Distância em Anos-luz: "+lightYear+"\nUnidade não identificada: Conversão fora do escopo")
}