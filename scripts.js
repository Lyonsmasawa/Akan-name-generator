function genName() {
    //arrays
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //get input values
    let yearOfBirth = parse.Int(document.getElementById("year").value);
    let month = parse.Int(document.getElementById("month").value);
    let day = parse.Int(document.getElementById("day").value);

    //validate year{
    function validateYear() {
        if (yearOfBirth < 1 || yearOfBirth > 2021 && yearOfBirth.tostring().length != 4) {
            alert("Please enter a valid year(\"0001 - 2021\")");
        } else {
            return true;
        }
    }

    //validate month
    function validateMonth() {
        if (month < 1 || month > 12) {
            alert('Please enter a valid month("1-12")');
        } else {
            return true;
        }
    }

    //validate day
    function validateDay() {
        if (day == 2 && (yearOfBirth) % 4 == 0) {
            if (day < 1 || day > 28) {
                alert("please enter a valid date(\"1-28\")");
            } else if (day < 1 || day > 29) {
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

    //get gender value
    function getGender() {
        let genderValue = document.getElementsByName("gender");
        if (genderValue.checked[0]) {
            let gender = "male";
        } else {
            let gender = "female";
        }
    }

    //determine day of the week the user was born
    function calcDay() {
        CC = yearOfBirth.slice(0, 2);
        YY = yearOfBirth.slice(2, 4);
        MM = month;
        DD = day;
        dayOftheWeek = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
    }

    //Conditions to generate name

}