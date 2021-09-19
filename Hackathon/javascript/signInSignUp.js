
const firebaseConfig = {
    apiKey: "AIzaSyDZBYpeHU8QkPkJ7HEjv01UJR77qqvitD0",
    authDomain: "hackathon-537ed.firebaseapp.com",
    projectId: "hackathon-537ed",
    storageBucket: "hackathon-537ed.appspot.com",
    messagingSenderId: "119595369808",
    appId: "1:119595369808:web:bcdde9ac35d00609389855"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();


function login() {
    const email = document.getElementById("floatingEmail2").value;
    const password = document.getElementById("floatingPassword2").value;
    console.log(email, password);
auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 

      var user = userCredential.user;
      console.log(user)
window.location="./../level1.html"      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      let previousPassord=document.getElementById("signInForm").innerHTML
      document.getElementById("passwordcontainer").innerHTML += "<div class='alert alert-danger' role='alert'>"+errorMessage +"</div>"

      setTimeout(()=>{document.getElementById("passwordcontainer").innerHTML=previousPassord},5000)}
    
    )}



function signUp(){
    let email=document.getElementById("floatingEmail2").value;
    let password=document.getElementById("floatingPassword2").value;
    let name= document.getElementById("floatingName").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

console.log(user);
window.location="./index.html"    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}



