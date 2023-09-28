function pc_choice(){
  var randomNumber = Math.round(Math.random()*10)%3
  var cpu = "papel"
  if(randomNumber == 0) cpu = "tesoura";
  else if(randomNumber == 1) cpu = "pedra";
  

  return cpu

}

function game(option) {
  var cpu = pc_choice();
  document.getElementById("cpu_choice_img").src = cpu+".png"
  if(option == "tesoura"){
    if(cpu == "papel"){
      document.getElementById("result").innerHTML = "parabens voce ganhou!"
    }
    if(cpu == "tesoura"){
      document.getElementById("result").innerHTML = "empate!"
    }
    if(cpu == "pedra"){
      document.getElementById("result").innerHTML = "a que pena, voce perdeu!"
    }
  }

  if(option == "papel"){
    if(cpu == "pedra"){
      document.getElementById("result").innerHTML = "parabens voce ganhou!"
    }
    if(cpu == "papel"){
      document.getElementById("result").innerHTML = "empate!"
    }
    if(cpu == "tesoura"){
      document.getElementById("result").innerHTML = "a que pena, voce perdeu!"
    }
  }

  if(option == "pedra"){
    if(cpu == "tesoura"){
      document.getElementById("result").innerHTML = "parabens voce ganhou!"
    }
    if(cpu == "pedra"){
      document.getElementById("result").innerHTML = "empate!"
    }
    if(cpu == "papel"){
      document.getElementById("result").innerHTML = "a que pena, voce perdeu!"
    }
  }

  
}
