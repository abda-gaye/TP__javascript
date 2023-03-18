var questions = [
    {
        "question":"quel est le resultat de  1 + 4",
        "a":"1",
        "b":"5",
        "c":"0",
        "d":"8",
        'correct':"b"
    },
    {
        "question":"quel est le resultat de  1 * 4",
        "a":"1",
        "b":"5",
        "c":"4",
        "d":"8",
        'correct':"c"
    },
    {
        "question":"quel est le resultat de   4-2",
        "a":"2",
        "b":"5",
        "c":"0",
        "d":"8",
        'correct':"a"
    },
    {
        "question":"quel est le resultat de  4/2",
        "a":"1",
        "b":"5",
        "c":"0",
        "d":"2",
        'correct':"d"
    },
    {
        "question":"quel est le resultat de  5 + 4",
        "a":"1",
        "b":"5",
        "c":"9",
        "d":"8",
        'correct':"c"
    }
]
var rslt = document.querySelectorAll(".opt")
// console.log(rslt)
var len = questions.length
var correct = 0
var vrai = 0
var faux =0
var first =0;

var charger = ()=>{
    if (first==len) {
        return finDuQuizz()
        
    }
    arreter()
    var answer = document.querySelector("#answer")
    var resultat = questions[first]
    console.log(resultat.correct);
    answer.innerText=  `${resultat.question}`
    rslt[0].nextElementSibling.innerHTML=resultat['a']
    rslt[1].nextElementSibling.innerHTML=resultat['b']
    rslt[2].nextElementSibling.innerHTML=resultat['c']
    rslt[3].nextElementSibling.innerHTML=resultat['d']
}

function getReponse (){
    rslt.forEach((element) => {
       if ( element.checked===true) {
        return element.value;
       }
      })
   }
function submit(){
    var resultat = questions[first]
    var Question = getReponse()
    console.log("question",Question);
    if (Question==resultat.correct) {
        vrai++
        console.log("vrai",vrai);
    }
    else{
        faux++
        console.log("faux",faux)
    }
    first++
    charger();
    return;
}


var arreter = () => {
    rslt.forEach((element) => {
      element.checked=false
    })
}
var finDuQuizz = () => {
    document.getElementById("content").innerHTML = `
    <h1> Quizz terminé vous avez ${vrai} sur ${len}
    <button class="btn" onclick="">
                    Rejouer
                </button>
    `
}
charger(first)