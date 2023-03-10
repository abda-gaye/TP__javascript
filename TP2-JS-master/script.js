// Définir un tableau de 4 éléments?
const tab = ['Mon Premier','Mon Deuxieme','Mon Troisieme','Mon Quatrieme']
// Générés dynamiquement des p à l'aide du tableau?
let leftPart= document.querySelector('.leftPart')
function generateur(){
    for(let i=0; i< tab.length; i++){
        let element1= document.createElement('p')
        element1.textContent=tab[i]
        leftPart.appendChild(element1)
    }
} 
generateur()

//survoler un element et le selectionner
let survol=document.querySelectorAll('p')
for(let i=0; i<survol.length; i++){
    survol[i].addEventListener("mouseover", () => {
     if (survol[i].classList.contains("active")){
        survol[i].classList.remove("active")
    }
    else{
         survol[i].classList.add("active")
     }
    })
    
}


//récupération du bonton Khadijatou Ba
let btn = document.querySelector(".btn");

//activation ou désactivation du bouton
btn.disabled = false;


let rightPart = document.querySelector('.rightPart')

btn.addEventListener("change", stateHandle());
//permet de vérifier si la div droite contient des éléments
function stateHandle() {
  if (rightPart.hasChildNodes()) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

//function supprimer et ajouter 

btn.addEventListener("click", () => {
  let leftPart = document.querySelector('.leftPart')
  let items = document.querySelectorAll('.rightPart p')

  for (const item of items) {
    if (item.className == "active") {
      let m = rightPart.removeChild(item)
      leftPart.append(m)
      m.classList.remove("active")
    }
  }
  
})







