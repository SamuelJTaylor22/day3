

let str1 = ""

function play(typeSelected){
 let random = Math.floor(Math.random() * 2.99)
  str1 = typeSelected 
 console.log(random)
  drawResult()
 if(random == 0){
    switch(typeSelected){
      case "Fire": drawResult("Fire", "tie"); break;
      case "Water": drawResult("Fire", "win"); break;
      case "Grass": drawResult("Fire", "lose"); break;
    }
  }
  else if(random == 1){
    switch(typeSelected){
      case "Fire": drawResult("Water", "lose"); break;
      case "Water": drawResult("Water", "tie"); break;
      case "Grass": drawResult("Water", "win"); break;
    }
  }
  else{
    switch(typeSelected){
      case "Fire": drawResult("Grass", "win"); break;
      case "Water": drawResult("Grass", "lose"); break;
      case "Grass": drawResult("Grass", "tie"); break;
    }
  }
}

function drawResult(type, result){
const area = document.getElementById("resultsArea")
area.innerHTML = ` <div class="col-12"><img src="//placehold.it/200x200" alt=""></div><div class="col-12"><h3>You chose ${str1} and faced ${type}, so you ${result}! </h3>`
}