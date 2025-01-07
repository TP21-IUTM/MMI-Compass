// Initialisation des 3 variables pour chaque parcours MMI
let crea_num = 0
let dev_web = 0
let com = 0

// Initialisation de tout les numéros de question
let question_number = Object.keys(dataQuizz)
let current_question = 0

// Variable DOM
let question_zone = document.querySelector(".question-text")
let question_number_zone = document.querySelector('.question-number')

showQuestion()

// Affiche la question actuel
function showQuestion() {
    // Si il n'y a plus de question
    if (current_question>=question_number.length) {
        showResults()
        return
    }

    question_number_zone.innerText = "Question N°" + question_number[current_question]
    question_zone.innerText = dataQuizz[question_number[current_question]].question
}

// Si oui est pressé
function yesPressed() {
    // Ajout du point en fonction du type de question
    let question_type = dataQuizz[question_number[current_question]].type
    if (question_type == "crea_num") {
        crea_num++
    }
    if (question_type == "dev_web") {
        dev_web++
    }
    if (question_type == "com") {
        com++
    }
    
    current_question++
    showQuestion()
}

// Si non est pressé
function noPressed() {
    current_question++
    showQuestion()
}