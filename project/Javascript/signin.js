
function CreateTeam(name, leader, members){
this.name=name;
this.leader = leader;
this.members = members
}
let teams=[];

function signIn(email,Password) {
    
    let semail= document.getElementById(email).value.toLowerCase();
    let spassword= document.getElementById(Password).value;
  let details = JSON.parse(localStorage.getItem(semail));
  

if(details.email===semail && details.password===spassword){
   
    document.getElementById("signinForm").action="./../HTML/homepage.html"
localStorage.setItem("personSignedIn",details.name);    
}
else{
    document.getElementById("signinForm").action="#"
    let previousPassord=document.getElementById("passwordcontainer").innerHTML
    document.getElementById("passwordcontainer").innerHTML += "<div class='alert alert-danger' role='alert'>Email or password incorrect</div>"
  
setTimeout(()=>{document.getElementById("passwordcontainer").innerHTML=previousPassord},5000)};

}

function createTeam(teamName,category,teamMemebers){
    let flag=false;
    let tName=document.getElementById(teamName).value;
    let tcat=document.getElementById(category).value;
    let tMem=document.getElementById(teamMemebers).value;
    let personSignedIn=localStorage.getItem("personSignedIn")
    console.log(tName,tcat,tMem)
    let getTeams=JSON.parse(localStorage.getItem("teams"))
    console.log(getTeams);
    if(getTeams)
    for (let index = 0; index < getTeams.length; index++) {
        if (getTeams[index].name===tName){
            flag=true;
            let previousPassord=document.getElementById("checkName").innerHTML
            document.getElementById("checkName").innerHTML += "<div class='alert alert-danger' role='alert'>Team Name previously registered</div>"
          
        setTimeout(()=>{document.getElementById("checkName").innerHTML=previousPassord},2000)
        }


      

    }
    if(flag===false){
    let members= tMem.split(",")
 console.log(members);
 let newTem= new CreateTeam(tName,personSignedIn,members);
 let getTeams=[]
 getTeams.push(newTem);
 console.log(getTeams)
 localStorage.setItem("teams",JSON.stringify(getTeams));
 location.reload();
}

}


 let createTeam1 = JSON.parse( localStorage.getItem("teams"))


let personSignedIn=localStorage.getItem("personSignedIn")
let leaderFlag = false;
let memberFlag = false;
if(createTeam1){
for (let i = 0 ; i<createTeam1.length; i++){
    let teamCreatorNode = document.createElement("div"); 
    let headingCreatorNode = document.createElement("h4");
    let membersCreatorNode = document.createElement("p");
    teamCreatorNode.setAttribute("class","lists");

    if(createTeam1[i].leader===personSignedIn ){
leaderFlag=true;

       
teamCreatorNode.setAttribute("id",createTeam1[i].name)
teamCreatorNode.setAttribute("onclick","getAnswers('"+createTeam1[i].name+"')" )
        headingCreatorNode.innerText=createTeam1[i].name;
        membersCreatorNode.innerText="Members: " + (createTeam1[i].members).toString(); 
        teamCreatorNode.appendChild(headingCreatorNode);
        teamCreatorNode.appendChild(membersCreatorNode);
        document.getElementById("leaders").appendChild(teamCreatorNode);
} 
 if(createTeam1[i].leader!==personSignedIn){
    for(let j=0;j<createTeam1[i].members.length;j++){
        if(createTeam1[i].members[j]===personSignedIn){
            teamCreatorNode.setAttribute("id",createTeam1[i].name)
            teamCreatorNode.setAttribute("onclick","giveAnswers('"+createTeam1[i].name+"')" )
            memberFlag=true
            headingCreatorNode.innerText=createTeam1[i].name;
            membersCreatorNode.innerText="Members: " + (createTeam1[i].members).toString(); 
            teamCreatorNode.appendChild(headingCreatorNode);
            teamCreatorNode.appendChild(membersCreatorNode);
            document.getElementById("teams").appendChild(teamCreatorNode);
        }
    }

}
}
}
if(leaderFlag===false){
    let teamCreatorNode = document.createElement("div"); 
    let headingCreatorNode = document.createElement("h4");
    
    teamCreatorNode.setAttribute("class","lists");
    headingCreatorNode.innerText="No Teams Found !";
    teamCreatorNode.appendChild(headingCreatorNode);
    document.getElementById("leaders").appendChild(teamCreatorNode);
}

if(memberFlag===false){
    let teamCreatorNode = document.createElement("div"); 
    let headingCreatorNode = document.createElement("h4");
    teamCreatorNode.setAttribute("class","lists");
    headingCreatorNode.innerText = "No Teams Found !";
    teamCreatorNode.appendChild(headingCreatorNode);
    document.getElementById("teams").appendChild(teamCreatorNode);
}


function giveAnswers(name){
    window.location = "./Questions.html";
  
    localStorage.setItem("CurrentSelected",name)
}
function getAnswers(name){
    window.location = "./ownersView.html";
  
    localStorage.setItem("CurrentSelected",name)
}

