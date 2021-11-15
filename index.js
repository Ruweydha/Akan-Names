//getting input from form by creating variables and arrays to be used.
var yearBorn = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
var button = document.getElementById("btn");
var femaleNames = ["Akosua", "Adwao", "Abenaa","Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];
dayOfWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Adding event listener to button.
button.addEventListener("submit", validate);

//function for validating input from form
function validate(e){
  e.preventDefault();
  if (yearBorn.value == "" ){
    document.getElementById("year").style.border = "2px solid red";
    alert("Please fill out the year you were born");
  }
  else if (yearBorn.value.length !=4){
   document.getElementById("year").style.border = "2px solid red";
    alert("Enter a valid year")
    yearBorn.value ="";
  }
  else if (month.value == "" ){
   document.getElementById("month").style.border = "2px solid red";
   alert("Please fill out the month you were born");
   month.value="";    
  }
  else if (month.value <=0 || month.value > 12){
   document.getElementById("month").style.border = "2px solid red";
   alert("Enter a valid month");
   month.value="";
  }
  else if (day.value == "" ){
    document.getElementById("day").style.border = "2px solid red"
    alert("Please fill out the day you were born");
    day.value="";
  }
  else if (day.value < 0 || day.value > 31){
    alert("Enter a valid day");
    document.getElementById("day").style.border = "2px solid red";
    day.value="";
  }
  else if (female.checked !=true && male.checked !=true  ){
    alert("Please pick your gender");
  }
  //if all input fields are validated, call on the function for generating akan name.
  else{
    generateName();
  }
}

//function for generating akan name
function generateName(){
 //creating a variable for the date
  const date = `${month.value}-${day.value}-${yearBorn.value}`
  //passing the value of the date variable
  const d = new Date(date);
  //creating a variable with the specific day someone was born.
  let dayBorn = d.getDay();
  
//generating akan name for the males.
  if(male.checked==true){
    akanName = maleNames[dayBorn];
    document.getElementById("akan").innerHTML = `You were born on a ${dayOfWeek[dayBorn]}. Your Akan name is ${maleNames[dayBorn]}`;
    
  }
  //generating akan name for the females.
  else {
    akanName = femaleNames[dayBorn];
    document.getElementById("akan").innerHTML = `You were born on a ${dayOfWeek[dayBorn]}. Your Akan name is ${femaleNames[dayBorn]}`;

  }
}
document.getElementById("btn").onclick = validate;
document.getElementById("btn2").reset();