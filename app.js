let strong = {

  Fire: ["Grass","Ice"],
  Water: ["Fire", "Rock"],
  Grass: ["Water", "Rock"],
  Electric: ["Water", "Flying"],
  Psychic: ["Fighting"],
  Ice: ["Grass", "Dragon", "Flying"],
  Dragon: [],
  Dark: ["Psychic"],
  Fairy: ["Dark", "Dragon", "Fighting"],
  Fighting: ["Dark", "Rock"],
  Flying: ["Grass"],
  Poison: ["Grass"],
  
}
let types = Object.keys(strong)








// function play(typeSelected){
//  let random = Math.floor(Math.random() * 2.99)
//  console.log(random)
//   drawResult()
//  if(random == 0){
//     switch(typeSelected){
//       case "Fire": drawResult(typeSelected, "Fire", "tie"); break;
//       case "Water": drawResult(typeSelected, "Fire", "win"); break;
//       case "Grass": drawResult(typeSelected, "Fire", "lose"); break;
//     }
//   }
//   else if(random == 1){
//     switch(typeSelected){
//       case "Fire": drawResult(typeSelected, "Water", "lose"); break;
//       case "Water": drawResult(typeSelected, "Water", "tie"); break;
//       case "Grass": drawResult(typeSelected, "Water", "win"); break;
//     }
//   }
//   else{
//     switch(typeSelected){
//       case "Fire": drawResult(typeSelected, "Grass", "win"); break;
//       case "Water": drawResult(typeSelected, "Grass", "lose"); break;
//       case "Grass": drawResult(typeSelected, "Grass", "tie"); break;
//     }
//   }
// }

function play(typeSelected){
  let random = Math.floor(Math.random() *(types.length- .01))
  let typeFighting = types[random]
  let result = ""
  if(typeSelected == typeFighting){
    result = "tie"
  }
  else if(strong[typeSelected].includes(typeFighting)){
    result = "win"
  }
  else{
    result = "lose"
  }
  
drawResult(typeSelected, typeFighting, result)

}


function drawResult(typePicked, typeFighting, result){
const area = document.getElementById("resultsArea")
area.innerHTML = ` <div class="col-12"><img src="//placehold.it/200x200" alt=""></div><div class="col-12"><h3>You chose ${typePicked} and faced ${typeFighting}, so you ${result}! </h3>`
}