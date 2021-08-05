let name;
function beginQuiz(name,hero,to_visible) {
    console.log(name,hero);
   name = document.getElementById(name).value;
   yourSuperhero = document.getElementById(hero).value;
   console.log(yourName,yourSuperhero) 
   document.getElementById(to_visible).className="for-quiz"
   document.getElementById("yourNameHere").innerText =name;
   document.getElementById("begin").className="main-quiz";
}



function extractResult(question){
    for (var i = 0, length = question.length; i < length; i++) {
        if (question[i].checked) {
            
            return question[i].value;
        }
        
    }
}



function calculateResult(q1,q2,q3,q4,q5) {
   let score=0;
    let quesAns={
        question1: extractResult(document.getElementsByName(q1)),
        question2: extractResult(document.getElementsByName(q2)),
        question3: extractResult(document.getElementsByName(q3)),
        question4: extractResult(document.getElementsByName(q4)),
        question5: extractResult(document.getElementsByName(q5))
    };
    console.log(quesAns);
    if (quesAns.question1=="superma") {
        score++;
    } 
    if (quesAns.question2=="Jor-El") {
        score++;
    }
    if (quesAns.question3=="Barbara Gordon") {
        score++;
    }
    if (quesAns.question4=="Inhaled nuclear Fumes") {
        score++;
    }
    if (quesAns.question5=="Alfred Pennyworth") {
        score++;
    }

    document.getElementById("begin").className="multiple";
    document.getElementById("finale").className="answer";
    document.getElementById("result").innerHTML += score + "/5";
    
}