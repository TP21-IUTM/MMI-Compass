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

// Si toute les question ont étés faites
function showResults() {
    question_number_zone.innerText = "Résultats"
    document.querySelector(".yes-or-no").remove()
    if (crea_num==0 && dev_web==0 && com==0) {
        question_zone.innerText = "Et bien on dirait que MMI n'est pas fait pour toi tu as 0 points partout !"
        return
    }

    if (crea_num>dev_web && crea_num>com) {
        question_zone.innerText = 'On dirait que tu es fait pour la création numérique ! Voilà tes scores : création numérique = ' + crea_num +' | développement web = ' + dev_web + ' | communication = ' + com
        return
    }
    
    if (dev_web>crea_num && dev_web>com) {
        question_zone.innerText = 'On dirait que tu es fait pour le développement web ! Voilà tes scores : création numérique = ' + crea_num +' | développement web = ' + dev_web + ' | communication = ' + com
        return
    }
    
    if (com>dev_web && com>crea_num) {
        question_zone.innerText = 'On dirait que tu es fait pour la communication ! Voilà tes scores : création numérique = ' + crea_num +' | développement web = ' + dev_web + ' | communication = ' + com
        return
    }

    if (crea_num == dev_web && crea_num == com && dev_web == com) {
        question_zone.innerText = 'Tu as de la chance ! Tout les parcours te corresponde car tu as obtenu le même nombre de points dans tout les parcours !'
        return
    }
}