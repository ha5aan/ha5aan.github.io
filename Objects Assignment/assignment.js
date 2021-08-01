var itemsArray = [
    {name:"juice",price:"50", quantity:"3"}, 
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];

    totalprice=0;
    for (let index = 0; index < itemsArray.length; index++) {
        console.log(" Price of "+itemsArray[index].name+ " is " + Number( itemsArray[index].price) * Number(itemsArray[index].quantity));
        totalprice= totalprice +  Number( itemsArray[index].price) * Number(itemsArray[index].quantity);
    }

    console.log("Total price is " + totalprice);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create an object with properties name, email, password, age, gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.

var personalDetails={

    name:"John",
    email:"abc@xyz.com",
    password:"123",
    age:30,
    gender:"male",
    city:"New York",
    country:"USA"

};

console.log("Checking for age and country");

function check_Property(property){

    propertyExists=property in personalDetails;
    if (propertyExists===true){
        return (property+ " Does Exist")
    }
    else{
        return (property+ " Does Not Exist")
    }
}
console.log(check_Property("age"))
console.log(check_Property("country"))
console.log(check_Property("firstname"))
console.log(check_Property("lastname"))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function NewObject(brand, model, year, engine,colour){
    this.brand=brand;
    this.model=model;
    this.year=year;
    this.engine=engine;
    this.colour=colour;
    this.old=function old() {
        currentDate=new Date;
        currentYear=currentDate.getFullYear();
        return ("This car is " + Number(currentYear - this.year) + " years old")
        
    }
}
var city = new NewObject("Honda","City",2002,1300,"Blue");
console.log(city);
console.log(city.old())


function NewPerson(name, gender, address, education, profession){
this.name=name;
this.gender=gender;
this.address=address;
this.education=education;
this.profession=profession;
}

function get_Data(functionName,functionGender,functionEducation,functionProfession,funcionAddress){

    oname=document.getElementById(functionName).value;
    oaddress=document.getElementById(funcionAddress).value;
    console.log(oaddress)
    ogender="";
    oeducation=[];
    oprofession=[];
    gender=document.getElementsByName(functionGender);
    educ=document.getElementsByName(functionEducation);
    prof=document.getElementsByName(functionProfession);
    
    for (var i = 0, length = gender.length; i < length; i++) {
        if (gender[i].checked) {
            
            ogender=gender[i].value;
    
            
            break;
        }
    }

    for (var i = 0, length = educ.length; i < length; i++) {
        if (educ[i].checked) {
            
            oeducation.unshift(educ[i].value);
        }
    }

    for (var i = 0, length = prof.length; i < length; i++) {
        if (prof[i].checked) {
            
            oprofession.unshift(prof[i].value);
        }
    }

  


var person1= new NewPerson(oname,ogender,oaddress,oeducation,oprofession);
console.log(person1)



}

