var yearBorn = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
var button = document.getElementById("btn");
var femaleNames = ["Akosua", "Adwao", "Abenaa","Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];

button.addEventListener("submit", validate);