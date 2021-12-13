function genName() {
    //arrays
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //get input values
    let yearOfBirth = document.getElementById("year").value;
    let month = Number(document.getElementById("month").value);
    let day = Number(document.getElementById("day").value);
    let genders = document.getElementsByName("gender");

    // validation functions
    function validateMonth() {
        if (month < 1 || month > 12) {
            alert('Please enter a valid month("1-12")');
        } else {
            return true;
        }
    }

    let monthOkay = validateMonth();

    //validate year{
    function validateYear() {
        if (Number(yearOfBirth) < 0001) {
            alert("Please enter a valid year(not less than 0, start from year 1)");
        } else {
            return true;
        }
    }
    let yearOkay = validateYear();

    //validate day
    function ValidateDay() {
        if (month === 2 && Number(yearOfBirth) % 4 === 0) {
            if (day < 1 || day > 28) {
                alert("please enter a valid date(\"1-28\")");
            } else if (day < 1 && day > 29) {
                alert("please enter a valid date(\"1-29\")");
            } else {
                return true;
            }
        } else if (day < 1 || day > 31) {
            alert("Please enter valid date(\"1-31\")");
        } else {
            return true;
        }
    }

    let dayOkay = ValidateDay();

    //get gender value
    function getGender() {
        for (let gender of genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }

    let userGender = getGender();

    //determine day of the week the user was born
    let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0, 2)) / 4) - 2 * Number(yearOfBirth.slice(0, 2)) - 1) +
        ((5 * Number(yearOfBirth.slice(2, 4)) / 4)) + ((26 * (month + 1) / 10)) + day) % 7);

    //Conditions to generate name
    if (userGender == "male" && monthOkay && dayOkay && yearOkay) {
        switch (dayOfWeekNumber) {
            case 1:
                document.getElementById("inp-name").innerHTML = " " + maleNames[0];
                document.getElementById("inp-day").innerHTML = " " + dayNames[0];
                document.getElementById("anim").innerHTML = " " + maleNames[0];
                return false;
            case 2:
                document.getElementById("inp-name").innerHTML = " " + maleNames[1];
                document.getElementById("inp-day").innerHTML = " " + dayNames[1];
                document.getElementById("anim").innerHTML = " " + maleNames[1];
                return false;
            case 3:
                document.getElementById("inp-name").innerHTML = " " + maleNames[2];
                document.getElementById("inp-day").innerHTML = " " + dayNames[2];
                document.getElementById("anim").innerHTML = " " + maleNames[2];
                return false;
            case 4:
                document.getElementById("inp-name").innerHTML = " " + maleNames[3];
                document.getElementById("inp-day").innerHTML = " " + dayNames[3];
                document.getElementById("anim").innerHTML = " " + maleNames[3];
                return false;
            case 5:
                document.getElementById("inp-name").innerHTML = " " + maleNames[4];
                document.getElementById("inp-day").innerHTML = " " + dayNames[4];
                document.getElementById("anim").innerHTML = " " + maleNames[4];
                return false;
            case 6:
                document.getElementById("inp-name").innerHTML = " " + maleNames[5];
                document.getElementById("inp-day").innerHTML = " " + dayNames[5];
                document.getElementById("anim").innerHTML = " " + maleNames[5];
                return false;
            case 7:
                document.getElementById("inp-name").innerHTML = " " + maleNames[6];
                document.getElementById("inp-day").innerHTML = " " + dayNames[6];
                document.getElementById("anim").innerHTML = " " + maleNames[6];
                return false;
            default:
                alert("an error occured please try again!");
        }
    } else if (userGender == "female" && monthOkay && dayOkay && yearOkay) {
        switch (dayOfWeekNumber) {
            case 1:
                document.getElementById("inp-name").innerHTML = " " + femaleNames[0];
                document.getElementById("inp-day").innerHTML = " " + dayNames[0];
                document.getElementById("anim").innerHTML = " " + femaleNames[0];
                return false;
            case 2:
                document.getElementById("inp-name").innerHTML = " " + femaleNames[1];
                document.getElementById("inp-day").innerHTML = " " + dayNames[1];
                document.getElementById("anim").innerHTML = " " + femaleNames[1];
                return false;
            case 3:
                document.getElementById("inp-name").innerHTML = " " + femaleNames[2];
                document.getElementById("inp-day").innerHTML = " " + dayNames[2];
                document.getElementById("anim").innerHTML = " " + femaleNames[2];
                return false;
            case 4:
                document.getElementById("inp-name").innerHTML = " " + femaleNames[3];
                document.getElementById("inp-day").innerHTML = " " + dayNames[3];
                document.getElementById("anim").innerHTML = " " + femaleNames[3];
                return false;
            case 5:
                document.getElementById("inp-name").innerHTML = " " + femaleNames[4];
                document.getElementById("inp-day").innerHTML = " " + dayNames[4];
                document.getElementById("anim").innerHTML = " " + femaleNames[4];
                return false;
            case 6:
                document.getElementById("inp-name").innerHTML = " " + femaleNames[5];
                document.getElementById("inp-day").innerHTML = " " + dayNames[5];
                document.getElementById("anim").innerHTML = " " + femaleNames[5];
                return false;
            case 7:
                document.getElementById("inp-name").innerHTML = " " + femaleNames[6];
                document.getElementById("inp-day").innerHTML = " " + dayNames[6];
                document.getElementById("anim").innerHTML = " " + femaleNames[6];
                return false;
            default:
                alert("an error occured please try again!");
        }
    } else {
        alert("Please try again");
    }
}