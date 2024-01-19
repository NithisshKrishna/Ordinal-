const questions = [
    {
        question: "Little interest or pleasure in doing things",
        optionA: "Not at all",
        optionB: "Several Days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionA"
    },

    {
        question: "Feeling down, depressed, or hopeless",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "Who was the first President of USA ?",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "Trouble falling or staying asleep, or sleeping too much",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: " Feeling tired or having little energy",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "Poor appetite or overeating",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "Trouble concentrating on things, such as reading the newspaper or watching television",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "Which of these numbers is an odd number ?",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "Moving or speaking so slowly that other people could have noticed ",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "Thoughts that you would be better off dead, or of hurting yourself",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "If you've had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },


    {
        question: "I find it very hard to unwind, relax or sit still",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "I have had stomach problems, such as feeling sick or having stomach cramps",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "I have been irritable and easily become annoyed",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "I have experienced shortness of breath",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "I have felt dizzy and unsteady at times",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "I have felt panicked and overwhelmed by things in my life",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "I have felt nervous and on edge",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "I have had trembling hands",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "I seem to be constantly worrying about things",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "How often do you feel you have nobody to talk to?",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "How often do you feel as if nobody really understands you?",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "How often do you feel completely alone?",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    },

    {
        question: "How often do you feel it is difficult for you to make friends?",
        optionA: "Not at all",
        optionB: "Several days",
        optionC: "More than half of the days",
        optionD: "Nearly every day",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            //document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            //document.getElementById(wrongLabelId).style.backgroundColor = "green"
            //document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Thank You for taking our quiz. You seem to be doing well considering everything you have been through. Keep going and be the best version of yourself. Healing is not done in a day but you seem to find your way through it pretty well. We are very proud of you for everything you have achieved. "
        remarkColor = "white"
    }
   
    
    else if (playerScore > 3) {
        remark = "Thank You for taking our quiz. We are very sorry to inform you but we feel like you will do better if you get some help to deal with your traumas and low points. But that being said, we really appreciate your efforts to get better by taking small steps like this test. "
        remarkColor = "white"
    }
    const playerGrade = (playerScore / 10) * 100

    
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    //document.getElementById('grade-percentage').innerHTML = playerGrade
    //document.getElementById('wrong-answers').innerHTML = wrongAttempt
    //document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex" 

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}