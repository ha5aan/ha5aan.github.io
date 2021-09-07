function CreatePerson(pname,pemail,ppass) {
    this.name=pname;
    this.email=pemail;
    this.password=ppass;
}

let count = 0;

// document.getElementById("floatingEmail").addEventListener("mouseleave",()=>{
// let isPReviously="";
// let valueIs="";
// let previousSubmit="";

// isPReviously=document.getElementById("floatingEmail");
// previousEmail=document.getElementById("emailAddress").innerHTML;
// previousSubmit=document.getElementById("submitButton").className;
// console.log(previousSubmit)
// valueIs= JSON.parse(localStorage.getItem(isPReviously.value))
// if(valueIs.email){
//     console.log(valueIs)
//   document.getElementById("submitButton").className+=" disabled";
//  document.getElementById("emailAddress").innerHTML += "<div class='alert alert-danger' role='alert'>This email is previously registered</div>"
  
// setTimeout(()=>{document.getElementById("emailAddress").innerHTML=previousEmail},2000)}
// else{
//     console.log("correct")
//     document.getElementById("submitButton").className ="";
//     document.getElementById("submitButton").className = previousSubmit;
//     console.log(previousEmail,previousSubmit)
// }})


function signUp(name,email,password) {
  
  let user = new CreatePerson(document.getElementById(name).value,document.getElementById(email).value.toLowerCase(),document.getElementById(password).value)
  let previousEmail="";
  let isPrevious=localStorage.getItem(user.email);
previousEmail=document.getElementById("emailAddress").innerHTML;

if(isPrevious){
    document.getElementById("signupForm").action="#"
    document.getElementById("emailAddress").innerHTML += "<div class='alert alert-danger' role='alert'>This email is previously registered</div>"
  
    setTimeout(()=>{document.getElementById("emailAddress").innerHTML=previousEmail},5000)
}
else{
    localStorage.setItem(user.email,JSON.stringify(user));
    document.getElementById("signupForm").action="./signIn.html"
    
}    
}