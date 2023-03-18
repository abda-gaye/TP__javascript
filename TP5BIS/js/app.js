const quizData = [{
        question: "Quelle est la capitale du Senegal ?",
        a: "Ohayo",
        b: "Saint Louis",
        c: "Damas",
        d: "dakar",
        correct: "d",
    },
    {
        question: "parmi eux qui fut damel ?",
        a: "Lat Dior",
        b: "Mandela",
        c: "Maba diakhou ba",
        d: "Sarkozy",
        correct: "a",
    },
    {
        question: "en quelle annee fut lancer javascript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "2000",
        correct: "b",
    },
    {
        question: "quelle est la capitale du portugal",
        a: "Paris",
        b: "Lisbonne",
        c: "Ohayo",
        d: "Damas",
        correct: "b",
    },
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    console.log(allInputs[0].nextElementSibling)
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> votre score est de ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);
