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
}