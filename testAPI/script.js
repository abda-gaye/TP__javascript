const btn = document.querySelector("#btn")

btn.addEventListener('click',async ()=>{
    let resultat = await fetch("https://random.dog/woof.json")
    let data = await resultat.json()
    document.querySelector("#image").src=data.url
})