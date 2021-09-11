function CreateQuestions(question1,question2,question3) {
    this.question1=question1;
    this.question2=question2;
    this.question3=question3;
}
let getTeams = JSON.parse(localStorage.getItem("teams"));
let currentTeam = localStorage.getItem("CurrentSelected");


let questions= new CreateQuestions(" What did you today?", "What will you do tomorrow?","Are there any blockers in your way?");
localStorage.setItem("Questions",JSON.stringify(questions));

let getting_Questions=JSON.parse(localStorage.getItem("Questions"));
document.getElementById("q1").innerText=getting_Questions.question1
document.getElementById("q2").innerText=getting_Questions.question2
document.getElementById("q3").innerText=getting_Questions.question3

for (let x = 0; x < getTeams.length; x++) {
    for (let y = 0; y < getTeams[x].members.length; y++) {
        if(getTeams[x].name===currentTeam){
            let memberNode=document.createElement("div")
            memberNode.className="member";
            memberNode.innerText= getTeams[x].members[y];
            document.getElementById("allmembers").appendChild(memberNode)
        }
    }
}
