// declaration des variables
let tableau = ["mon projet 1 ","mon projet 2 ","mon projet ","mon projet 4 "]
let colorsbtn = document.querySelectorAll('.btn')
for(let i =0;i<colorsbtn.length;i++){
    colorsbtn[i].addEventListener('click',function(){
        let couleur = this.getAttribute('data-color')
        genererNotification(couleur)
    })
}

function genererNotification(couleur) {
    for(let i=0;i<tableau.length;i++){
    let notification = document.createElement('div')
        notification.textContent=tableau[i]
        notification.classList.add('notification')
        notification.style.backgroundColor=couleur;
        notification.style.position="absolute"
        notification.style.top = "80px"
        notification.style.right = "30px"
        notification.style.padding = "50px"
        notification.style.fontSize = "40px"
        document.body.appendChild(notification)
        setTimeout(function(){
            // notification.parentNode.removeChild(notification)
            notification.remove()
        },1000) 
    }
    
   
}
