function aandA(today,tommorow,blocker){

    this.today=today;
    this.tommorow=tommorow;
    this.blocker=blocker;
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
console.log( d.getDate(), months[d.getMonth()],d.getFullYear());
document.getElementById("date").innerHTML=(d.getDate() +" "+ months[d.getMonth()] +" "+ d.getFullYear()).toString();

function questionAnswers(today,tomorrow,blocker){
    let workToday=document.getElementById(today).value;
    let workTomorrow=document.getElementById(tomorrow).value;
    let workBlocker=document.getElementById(blocker).value;
    console.log(workBlocker,workToday,workTomorrow);
    let personSignedIn=localStorage.getItem("personSignedIn");
    let currentSelected =  localStorage.getItem("CurrentSelected");
    let personAnsKey= personSignedIn+currentSelected
    let questionsobj= new aandA(workToday,workTomorrow,workBlocker);
    localStorage.setItem(personAnsKey,JSON.stringify(questionsobj));
 document.getElementById("QuestionForm").action="./../HTML/homepage.html"

}