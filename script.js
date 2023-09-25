document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // The code above set the form to default to prevent it from some unnecessary errors

    const ageDay = parseInt(document.getElementById('day').value);
    const ageMonth = parseInt(document.getElementById('month').value);
    const ageYear = parseInt(document.getElementById('year').value);

    // The value above takes the value of the form input and convert it to a number from string because input are strings by default

    const currentYear = new Date().getFullYear();

    // The variable above get the current Year 

    if (isNaN(ageDay)) {
        const dayError1 = document.getElementById('dayError1');
        dayError1.textContent = 'This field is required';
        const dayError1input = document.getElementById("day");
        dayError1input.style.border = "1px solid red";
        const labelDay = document.getElementById("labelDay");
        labelDay.style.color = "red";
    } else if(ageDay <= 0 || ageDay > 31){
        const dayError1 = document.getElementById('dayError1');
        dayError1.textContent = 'Must be a valid day';
        const dayError1input = document.getElementById("day");
        dayError1input.style.border = "1px solid red";
        const labelDay = document.getElementById("labelDay");
        labelDay.style.color = "red";
    } else {
        const dayError1input = document.getElementById("day");
        dayError1input.style.border = "1px solid black";
        const labelDay = document.getElementById("labelDay");
        labelDay.style.color = "black";   
        const dayError1 = document.getElementById('dayError1');
        dayError1.textContent = '';
    }

    /* The conditional statement above first check if the ageDay contant value is not a number, if not it get the div#dayError1 bellow the input#day, the input#day and label#labelDay then change the content of the div#dayError1 || dayError1, change the style of input#day || dayError1input and also change the style of label#labelDay || labelDay;
    else if the ageDay value is lesser than or equal to 0   || if ageDay greater than 31 it will not run and it get the div#dayError1 bellow the input#day, the input#day and label#labelDay then change the content of the div#dayError1 || dayError1, change the style of input#day || dayError1input and also change the style of label#labelDay || labelDay;
    But if ageDay is number and if the ageDay value is greater than or equal to  1   || if ageDay lesser than 31 it runs the code correctly*/

    

    if (isNaN(ageMonth)) {
        const dayError2 = document.getElementById('dayError2');
        dayError2.textContent = 'This field is required';
        const dayError2input = document.getElementById("month")
        dayError2input.style.border = "1px solid red";
        const labelMonth = document.getElementById('labelMonth');
        labelMonth.style.color = 'red';
    } else if (ageMonth <= 0 || ageMonth > 12) {
        const dayError2 = document.getElementById('dayError2');
        dayError2.textContent = 'Must be a valid day';
        const dayError2input = document.getElementById("month")
        dayError2input.style.border = "1px solid red";
        const labelMonth = document.getElementById('labelMonth');
        labelMonth.style.color = 'red';
    } else{
        const dayError2 = document.getElementById('dayError2');
        dayError2.textContent = '';
        const dayError2input = document.getElementById("month")
        dayError2input.style.border = "1px solid black";
        const labelMonth = document.getElementById('labelMonth');
        labelMonth.style.color = 'black';
    }

    /* The conditional statement above first check if the ageMonth constant value is not a number, if not it get the div#dayError2 bellow the input#month, the input#month and label#labelMonth then change the content of the div#monthError || monthError1, change the style of input#month || monthError1input and also change the style of label#labelMonth || labelMonth;
    else if the ageMonth value is lesser than or equal to 0   || if ageDay greater than 12 it will not run and it get the div#MonthError1 bellow the input#month, the input#month and label#labelMonth then change the content of the div#monthError1 || monthError1, change the style of input#month || monthError1input and also change the style of label#labelMonth || labelMonth;
    But if ageMonth is number and if the ageMOnth value is greater than or equal to  1   || if ageMonth lesser than 12 it runs the code correctly*/

    if (isNaN(ageYear)) {
        const dayError3 = document.getElementById('dayError3');
        dayError3.textContent = 'This field is required';
        const dayError3input = document.getElementById("year");
        dayError3input.style.border = "1px solid red";
        const labelYear = document.getElementById('labelYear');
        labelYear.style.color = 'red';
    } else if( ageYear <= 0 || ageYear < 1900 || ageYear > currentYear - 1) {
        const dayError3 = document.getElementById('dayError3');
        dayError3.textContent = 'Must be a valid day';
        const dayError3input = document.getElementById("year");
        dayError3input.style.border = "1px solid red";
        const labelYear = document.getElementById('labelYear');
        labelYear.style.color = 'red';
    } else {
        const dayError3 = document.getElementById('dayError3');
        dayError3.textContent = '';
        const dayError3input = document.getElementById("year");
        dayError3input.style.border = "1px solid black";
        const labelYear = document.getElementById('labelYear');
        labelYear.style.color = 'black';
    }

    /* Note: instead of month or Month please know that it should be year or Year thanks; 
    The conditional statement above first check if the ageMonth constant value is not a number, if not it get the div#dayError2 bellow the input#month, the input#month and label#labelMonth then change the content of the div#monthError || monthError1, change the style of input#month || monthError1input and also change the style of label#labelMonth || labelMonth;
    else if the ageMonth value is lesser than or equal to 0   || if ageDay greater than 12 it will not run and it get the div#MonthError1 bellow the input#month, the input#month and label#labelMonth then change the content of the div#monthError1 || monthError1, change the style of input#month || monthError1input and also change the style of label#labelMonth || labelMonth;
    But if ageMonth is number and if the ageMOnth value is greater than or equal to  1   || if ageMonth lesser than 12 it runs the code correctly*/

    const BIRTHDATE = `${ageYear}-${String(ageMonth).padStart(2, '0')}-${String(ageDay).padStart(2, '0')}`;

    /*the code above can be explane as const day = new Date('YYYY-MM-DD') it is used to arrange the formate of the date of birth of the user for proper calculation*/

    const birthdate = new Date(BIRTHDATE);
    // the variable above takes value of BIRTHDAY  and formate it
    const today = new Date();
    // the variable above is the current ('YYYY-MM-DD') and also time

    const ageInMilliseconds = today - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;

    // this are the calculations from milliseconds to days

    const years = Math.floor(ageInDays / 365);
    const months = Math.floor((ageInDays % 365) / 30);
    const days = Math.floor((ageInDays % 365) % 30);

    // The year variable first divide the value from the calculation of day(ageIndays) and divide it by 365 and then round it up to the nearest whole number;

    // The month variable first get remainder of the value from the calculation of day(ageIndays) by 365 and then round it up to the nearest whole number;


    if(isNaN(years) || isNaN(months) || isNaN(days)){
        const result1 = document.getElementById('result1');
        result1.textContent = "--"
        const result2 = document.getElementById('result2');
        result2.textContent = "--"
        const result3 = document.getElementById('result3');
        result3.textContent = "--" 
    } else{
        const result1 = document.getElementById('result1');
        result1.textContent = years
        const result2 = document.getElementById('result2');
        result2.textContent = months
        const result3 = document.getElementById('result3');
        result3.textContent = days
    }
});
