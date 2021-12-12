//arrays
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//get input values
let yearOfBirth = document.getElementById("year").value;
let month = document.getElementById("month").value;
let day = document.getElementById("day").value;

//get gender value
function getGender {
    let genderValue = document.getElementsByName("gender");
    if (genderValue.checked[0]) {
        let gender = "male";
    } else {
        let gender = "female";
    }
}