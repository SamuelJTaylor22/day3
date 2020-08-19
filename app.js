let types = [
{
  name: "fire",
  fire: "tie",
  water: "lose",
  grass: "win",
  img: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9"
},
{
  name: "water",
  fire: "win",
  water: "tie",
  grass: "lose",
  img: "https://images.unsplash.com/photo-1479981280584-037818c1297d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
  name: "grass",
  fire: "lose",
  water: "win",
  grass: "tie",
  img: "https://images.unsplash.com/photo-1494187570835-b188e7f0f26e"
}
]








function play(typeSelected){
 let random = Math.floor(Math.random() * 2.99)
 console.log(random)
  drawResult()
 if(random == 0){
    switch(typeSelected){
      case "Fire": drawResult(typeSelected, "Fire", "tie"); break;
      case "Water": drawResult(typeSelected, "Fire", "win"); break;
      case "Grass": drawResult(typeSelected, "Fire", "lose"); break;
    }
  }
  else if(random == 1){
    switch(typeSelected){
      case "Fire": drawResult(typeSelected, "Water", "lose"); break;
      case "Water": drawResult(typeSelected, "Water", "tie"); break;
      case "Grass": drawResult(typeSelected, "Water", "win"); break;
    }
  }
  else{
    switch(typeSelected){
      case "Fire": drawResult(typeSelected, "Grass", "win"); break;
      case "Water": drawResult(typeSelected, "Grass", "lose"); break;
      case "Grass": drawResult(typeSelected, "Grass", "tie"); break;
    }
  }
}




function drawResult(typePicked, typeFighting, result){
const area = document.getElementById("resultsArea")
area.innerHTML = ` <div class="col-12"><img src="//placehold.it/200x200" alt=""></div><div class="col-12"><h3>You chose ${typePicked} and faced ${typeFighting}, so you ${result}! </h3>`
}