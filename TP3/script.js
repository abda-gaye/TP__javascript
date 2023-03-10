// declaration des variables
let colorsbtn = document.querySelectorAll('.btn')
for(let i =0;i<colorsbtn.length;i++){
    colorsbtn[i].addEventListener('click',function(){
        let couleur = this.getAttribute('data-color')
        genererNotification(couleur)
    })
}

function genererNotification(couleur) {
    var notification = document.createElement('div')
    notification.classList.add('notification')
    notification.textContent="loremiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiddbfbbfb"
    notification.style.backgroundColor=couleur;
    notification.style.position="absolute"
    notification.style.top = "30px"
    notification.style.right = "120px"
    notification.style.padding = "50px"
    notification.style.fontSize = "40px"
    document.body.appendChild(notification)
    setTimeout(function(){
        notification.parentNode.removeChild(notification)
    },1000)
}
