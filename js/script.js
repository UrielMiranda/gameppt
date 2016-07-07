
////////////// Usuario ////////////////

var user = prompt("Escoge piedra, papel o tijera").toLowerCase(); // pregunta al usuario y la respuesta la guarda en la variable user. toLowerCase() convierte a minúscula
console.log("User = " + user); // console.log() Imprime en consola el valor del usuario
var pc = Math.random(); // número aleatorio guardado en la variable pc


/////// toFixed(2) Reduce el numero aletorio a solo 2 decimales

console.log(pc.toFixed(2));

///////////// Seleccionamos los id del html //////

var resultado = document.getElementById('resultado'); //seleccionamos al elemento (id ="resultado") del html
var user_print = document.getElementById('user'); //seleccionamos al elemento (id ="user") del html
var pc_print = document.getElementById("pc"); //seleccionamos al elemento (id ="pc") del html

////////////// Le cambiamos el color del texto /////////

pc_print.style.color = "blue"; //le asignamos el color azul a pc_print
user_print.style.color = "orange"; // le asignamos el color naranja a user_print
resultado.style.color = "green"; // le asignamos el color verde a resultado

////////////// Imprime la selección de usuario ////////

user_print.innerHTML = "User = " + user; // muestra en el html el valor de user

//////////// PC Selecciona Piedra Papel o tijera////////////

if(pc <= 0.33){ // si el valor random de pc es menor o igual a 0.33
  pc = "piedra"; // el valor numerico de pc, ahora toma el valor "piedra"
  pc_print.innerHTML = "Pc = Piedra"; //mostramos en el html el valor "PC = piedra"
  console.log("PC = Piedra"); //mostramos en consola el valor "PC = piedra"
}else if(pc >= 0.34 && pc <= 0.66){ // si el valor random de pc es mayor o igual a 0.34 y menor o igual a 0.66
  pc = "papel"; // el valor numerico de pc, ahora toma el valor "papel"
  pc_print.innerHTML = "Pc = Papel";  //mostramos en el html el valor "PC = Papel"
  console.log("PC = Papel"); //mostramos en consola el valor "PC = Papel"
}else{ // si el valor random de pc no es mayor o igual a 0.34 y no es menor o igual a 0.66
  pc = "tijera"; // el valor numerico de pc, ahora toma el valor "tijera"
  pc_print.innerHTML = "Pc = tijera";  //mostramos en el html el valor "PC = tijera"
  console.log("PC = Tijera"); //mostramos en consola el valor "PC = Tijera"
}

////////// Comparación entre los resultados de cada jugador ////
// Piedra > tijera
// tijera > papel
// papel > piedra


 //function -> nombredefuncion (elementos,elementos) /////
function compara(element1,element2){ /// Inicia comparación de empate
  if(element1 === element2){ // si el elemento 1 es exactamente igual al elemento 2
    console.log("¡Empate!");
      resultado.innerHTML = "Resultado = Empate"; ///// fin comparación empate
  }else if(element1 === "piedra"){ // si el elemento uno escogió piedra
    if(element2 === "tijera"){    //si el elemento 2 escogió tijera
      console.log("Piedra gana!"); //anunciamos por consola ganador que es Piedra
      resultado.innerHTML = "Resultado = Piedra Gana"; //anunciamos por html el ganador que es Piedra
    }else{ // si no escogió tijera, entonces escogió papel,porque si fuera piedra habría sido un empate, porque si el programa avanza hasta aquí es porque tampoco fue empate
      console.log("Papel gana"); //muestra en consola "papel gana"
      resultado.innerHTML = "Resultado = Papel gana"; //muestra en  html el resultado
    }//cierra else
  }else if(element1 === "tijera"){
    if(element2 === "papel"){
      console.log("Tijera gana!");
      resultado.innerHTML = "Resultado = Tijera gana";
    }else{
      console.log("Piedra gana!");
      resultado.innerHTML = "Resultado = Piedra gana";
    }// cierra else
  }else if (element1 === "papel") {
    if(element2 === "piedra"){
      console.log("Papel gana");
      resultado.innerHTML = "Resultado = Papel gana";
    }else{
      console.log("Gana tijera");
      resultado.innerHTML = "Resultado = Gana tijera";
    }
  }else{
    console.log("Debes escoger piedra, papel o tijera");
  }
}
compara(user, pc); //instanciamos la función

//Instanciar significa, mandar a llamar la clase para que se ejecute
