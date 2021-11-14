var yearBorn = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
var button = document.getElementById("btn");
var femaleNames = ["Akosua", "Adwao", "Abenaa","Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];

button.addEventListener("submit", validate);

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
  else if (female.checked ==true && male.checked ==true  ){
    alert("Please pick one gender");
  }
  else{
    calculate();
  }
}

function calculate(){
  var century = yearBorn.value.slice(0,2);
  var year = yearBorn.value.slice(2,4);
  var cc = parseInt(century);
  var yy = parseInt(year);
  var mm = parseInt(month.value);
  var dd = parseInt(day.value);

  if(cc<= 19){
    var dayOfWeek = Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7-1);
  }
  else{
    var dayOfWeek = Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
  }

  if(female.checked ==true && dayOfWeek==0){
      document.getElementById("akan").innerHTML = (`You were born on a Sunday. Your Akan name is ${femaleNames[0]}`);
  }
  else  if(female.checked ==true && dayOfWeek==1){
    document.getElementById("akan").innerHTML = (`You were born on a Monday. Your Akan name is ${femaleNames[1]}`);
  }
  else  if(female.checked ==true && dayOfWeek==2){
    document.getElementById("akan").innerHTML = (`You were born on a Tuesday. Your Akan name is ${femaleNames[2]}`);
  }
  else  if(female.checked ==true && dayOfWeek==3){
    document.getElementById("akan").innerHTML = (`You were born on a Wednesday. Your Akan name is ${femaleNames[3]}`);
  }
  else  if(female.checked ==true && dayOfWeek==4){
    document.getElementById("akan").innerHTML = (`You were born on a Thursday. Your Akan name is ${femaleNames[4]}`);
  }
  else  if(female.checked ==true && dayOfWeek==5){
    document.getElementById("akan").innerHTML = (`You were born on a Friday. Your Akan name is ${femaleNames[5]}`);
  }
  else  if(female.checked ==true && dayOfWeek==6){
    document.getElementById("akan").innerHTML = (`You were born on a Saturday. Your Akan name is ${femaleNames[6]}`);
  }
  else  if(male.checked ==true && dayOfWeek==0){
    document.getElementById("akan").innerHTML = (`You were born on a Sunday. Your Akan name is ${maleNames[0]}`);
  }
  else  if(male.checked ==true && dayOfWeek==1){
    document.getElementById("akan").innerHTML = (`You were born on a Monday. Your Akan name is ${maleNames[1]}`);
  }
  else  if(male.checked ==true && dayOfWeek==2){
    document.getElementById("akan").innerHTML = (`You were born on a Tuesday. Your Akan name is ${maleNames[2]}`);
  }
  else  if(male.checked ==true && dayOfWeek==3){
    document.getElementById("akan").innerHTML = (`You were born on a Wednesday. Your Akan name is ${maleNames[3]}`);
  }
  else  if(male.checked ==true && dayOfWeek==4){
    document.getElementById("akan").innerHTML = (`You were born on a Thursday. Your Akan name is ${maleNames[4]}`);
  }
  else  if(male.checked ==true && dayOfWeek==5){
    document.getElementById("akan").innerHTML = (`You were born on a Friday. Your Akan name is ${maleNames[5]}`);
  }
  else  if(male.checked ==true && dayOfWeek==6){
    document.getElementById("akan").innerHTML = (`You were born on a Saturday. Your Akan name is ${maleNames[6]}`);
  }

}
document.getElementById("btn").onclick = validate;
document.getElementById("btn2").reset();