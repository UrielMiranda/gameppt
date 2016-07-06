
////////////// Usuario ////////////////
var user = prompt("Escoge piedra, papel o tijera").toLowerCase();
console.log("User =" + user);
var pc = Math.random();
console.log(pc.toFixed(2));


//////////// PC ////////////
if(pc <= 0.33){
  pc = "piedra";
  console.log("PC = Piedra");
}else if(pc >= 0.34 && pc <= 0.66){
  pc = "papel";
  console.log("PC = Papel");
}else{
  pc = "tijera";
  console.log("PC = Tijera");
}

// Piedra > tijera
// tijera > papel
// papel > piedra
function compara(element1,element2){
  if(element1 === element2){
    console.log("¡Empate!");
  }else if(element1 === "piedra"){
    if(element2 === "tijera"){
      console.log("Piedra gana!");
    }else{
      console.log("Papel gana");
    }//cierra else
  }else if(element1 === "tijera"){
    if(element2 === "papel"){
      console.log("tijera gana!");
    }else{
      console.log("piedra gana!");
    }// cierra else
  }else if (element1 === "papel") {
    if(element2 === "piedra"){
      console.log("papel gana");
    }else{
      console.log("gana tijera");
    }
  }else{
    console.log("Debes escoger piedra, papel o tijera");
  }
}
compara(user, pc);
