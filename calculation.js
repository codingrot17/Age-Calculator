// // // Assuming the birthdate is in the format 'YYYY-MM-DD'
// const day = 3;
// const year = 2003;
// const month = 25;


// // Assuming the birthdate is in the format 'YYYY-MM-DD'
// // const birthdate = new Date(year-month-day);
// const today = new Date();

// const ageInMilliseconds = today - birthdate;
// const ageInSeconds = ageInMilliseconds / 1000;
// const ageInMinutes = ageInSeconds / 60;
// const ageInHours = ageInMinutes / 60;
// const ageInDays = ageInHours / 24;

// const years = Math.floor(ageInDays / 365);
// const months = Math.floor((ageInDays % 365) / 30);
// const days = Math.floor((ageInDays % 365) % 30);

// console.log(`You are ${years} years, ${months} months, and ${days} days old.`);

const day = 3;
const year = 2003;
const month = 2;


const BIRTHDATE = `${year}-${month + 1}-${day}`; // Replace with the actual birthdate

const birthdate = new Date(BIRTHDATE);
const today = new Date();

const ageInMilliseconds = today - birthdate;
const ageInSeconds = ageInMilliseconds / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;

const years = Math.floor(ageInDays / 365);
const months = Math.floor((ageInDays % 365) / 30);
const days = Math.floor((ageInDays % 365) % 30);

console.log(`You are ${years} years, ${months} months, and ${days} days old.`);



document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const ageDay = document.getElementById('day').value;
    const ageMonth = document.getElementById('month').value;
    const ageYear = document.getElementById('year').value;

    const BIRTHDATE = `${ageYear}-${String(ageMonth).padStart(2, '0')}-${String(ageDay).padStart(2, '0')}`;

    const birthdate = new Date(BIRTHDATE);
    const today = new Date();

    const ageInMilliseconds = today - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;

    const years = Math.floor(ageInDays / 365);
    const months = Math.floor((ageInDays % 365) / 30);
    const days = Math.floor((ageInDays % 365) % 30);

    document.getElementById('result1').innerHTML = years;
    document.getElementById('result2').innerHTML = months;
    document.getElementById('result3').innerHTML = days;

});