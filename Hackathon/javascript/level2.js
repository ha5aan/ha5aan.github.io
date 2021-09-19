let lives=3
let score=0
let level=2;
let blueCount=1;
let userCount=1;
document.getElementById("userLevel").innerText=level
for (let index = 0; index <40; index++) {
    let nodeCreate=document.createElement("div");
    nodeCreate.className="baloon"
    nodeCreate.id="baloon"+index;
    
    nodeCreate.setAttribute("onmouseover","pop_baloon(baloon"+index+")")
    let colour=Math.ceil(Math.random() * 4)
    // console.log( colour);
    if(colour===1 || colour ===3){
        nodeCreate.style.backgroundColor="red"
    }
    else if(colour===2){
        nodeCreate.style.backgroundColor="blue"
        blueCount++;

    }
    else {
        nodeCreate.style.backgroundColor="yellow"
    }

    document.getElementById("platform").appendChild(nodeCreate);
}

function pop_baloon(baloonNumber) {
let selectcolour="blue"

    baloonNumber.style.backgroundRepeat="no-repeat";
        baloonNumber.style.backgroundSize= "100px 100px";
        baloonNumber.style.opacity="0.2"
        baloonNumber.style.backgroundImage="url(./../Images/pngkit_popcorn-kernel-png_1159285.png)"
        
        if(lives===1){
            console.log("u lost")
            document.getElementById("platform").style.display="none";
            document.getElementById("life").innerText=0
            document.getElementById("restartmessage").style.display="block";
            document.getElementById("score1").innerText=score

        }
        if(userCount===blueCount){
            console.log(userCount,blueCount);
            document.getElementById("score2").innerText=score
            document.getElementById("platform").style.display="none";

            document.getElementById("nextmessage").style.display="block";
         
        
        }
     


        if(baloonNumber.style.backgroundColor!==selectcolour){
            console.log(lives);
            lives=lives-1;
            document.getElementById("life").innerText=lives
            if(lives===2){
                document.getElementById("life").style.color="yellow"
            }
            else if(lives===1){
                document.getElementById("life").style.color="red"
            }
        }
        else{
           
            console.log("correct")
            score=score+10
            userCount++;
            document.getElementById("score").innerText=score
        
        }
    
    }

function tryagain() {
    location.reload();
   
}
function nextLevel(){
    window.location="./level3.html"
}