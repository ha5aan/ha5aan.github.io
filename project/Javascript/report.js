let getTeams = JSON.parse(localStorage.getItem("teams"));
let currentTeam = localStorage.getItem("CurrentSelected");
let Questions= JSON.parse(localStorage.getItem("Questions"));
console.log(getTeams, currentTeam)


for (let x = 0; x < getTeams.length; x++) {
    for (let y = 0, answers = null; y < getTeams[x].members.length; y++) {
        if(getTeams[x].name===currentTeam){
       
        answers = JSON.parse(localStorage.getItem(getTeams[x].members[y] + currentTeam))
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const d = new Date();
        let baseDiv = document.createElement("div")
        baseDiv.setAttribute("class", "Namedate");
        let NameOfMEmber = document.createElement("h4")
        
        let qaContainer = document.createElement("div");
        qaContainer.setAttribute("class", "QuestionsAnswers")

        let q1Container= document.createElement("div");
        q1Container.className="Question";
        q1Container.id="que1";
        q1Container.innerText="Q." + Questions.question1
        console.log(q1Container);
        let ans1Container = document.createElement("div")
        
        ans1Container.className="Answer";
        ans1Container.id="ans1";
       
        let q2Container= document.createElement("div");
        q2Container.className="Question";
        q2Container.id="que2";
        q2Container.innerText="Q." + Questions.question2
        console.log(q2Container);

        let ans2Container = document.createElement("div")
        ans2Container.className="Answer";
        ans2Container.id="ans2";

        let q3Container= document.createElement("div");
        q3Container.className="Question";
        q3Container.id="que3";
        q3Container.innerText="Q. "+ Questions.question3
        console.log(q3Container);

        let ans3Container = document.createElement("div") 
        ans3Container.className="Answer";
        ans3Container.id="ans3";
        
        
        
        
        
        if (answers) {
            
            NameOfMEmber.innerText = getTeams[x].members[y] + ": " + d.getDate() + " " + months[d.getMonth()]

           
            ans1Container.innerText= "A. " + answers.today
            console.log( answers.today);

       
       
        ans2Container.innerText= "A. " + answers.tommorow;
        console.log(ans2Container);


       
       
        ans3Container.innerText= "A. " + answers.blocker
        console.log(ans3Container);


        }
        else{
            NameOfMEmber.innerText = getTeams[x].members[y] + ": " + d.getDate() + " " + months[d.getMonth()] + "| Not Submitted"
            ans1Container.innerText= "A. ";
            ans2Container.innerText= "A. ";
            ans3Container.innerText= "A. ";
        
        }
                     
        baseDiv.appendChild(NameOfMEmber)
        baseDiv.appendChild(qaContainer);
        qaContainer.appendChild(q1Container);
        qaContainer.appendChild(ans1Container);
        qaContainer.appendChild(q2Container);
        qaContainer.appendChild(ans2Container);
        qaContainer.appendChild(q3Container);
        qaContainer.appendChild(ans3Container);
        document.getElementById("allcontaining").appendChild(baseDiv);

          
        
       
    }
}
}