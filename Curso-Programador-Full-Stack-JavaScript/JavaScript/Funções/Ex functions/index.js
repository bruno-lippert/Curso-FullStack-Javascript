let spaceship,
  velocity = 0,
  option;

spaceship = prompt("Digite o nome da nave: ");

function menu(option) {
  option = prompt(
    "1 - Acelerar a nave em 5km/s\n2 - Desacelerar em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa"
  );
  if (option == "1" || option == "2" || option == "3" || option == "4") {
    return option;
  } else {
    alert("Opção inválida!");
  }
}

function acceleration(velocity) {
  let newVelocity = velocity + 5;
  return newVelocity;
}

function slowdown(velocity) {
    let newVelocity
  if (velocity <= 0) {
    alert("A espaçonave está parada");
  } else {
    return newVelocity = velocity - 5;
  }
}

function onBoardData(spaceship, velocity) {
  alert("Nome da nave: " + spaceship + "\nVelocidade: " + velocity);
}

option = menu();

while (option != "4") {
  switch(option){
    case "1":
        velocity = acceleration(velocity)
        break
    case "2":
        velocity = slowdown(velocity)
        break
    case "3":
        onBoardData(spaceship, velocity)
        break
    default:
        alert("Encerrando programa de bordo")
}
  option = menu();
}

