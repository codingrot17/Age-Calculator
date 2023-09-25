document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let dob = new Date(document.getElementById('dob').value);
    let today = new Date();

    if (!document.getElementById('dob').checkValidity()) {
      document.getElementById('result').innerHTML = 'Invalid date. Please enter a valid date.';
      return;
    }

    if (dob > today) {
      document.getElementById('result').innerHTML = 'Invalid date. Date of birth cannot be in the future.';
      return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

      document.getElementById('result1').innerHTML = years
      document.getElementById('result2').innerHTML = months
      document.getElementById('result3').innerHTML = days
  });


















  // document.getElementById('ageForm').addEventListener('submit', function(e) {
//         e.preventDefault();
    
//         let day = new Date(document.getElementById('day').value).getDay;
//     })
    
    
document.getElementById('ageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let day = document.getElementById('day').value;
  day = Number(day);
  let currDay = new Date().getDay;
  currDay = Number(currDay);

  let month = document.getElementById('month').value;
  month = Number(month);
  let currMonth = new Date().getMonth;
  currMonth = Number(currMonth);

  let year = document.getElementById('year').value;
  year = Number(year);

  let currYear = new Date().getFullYear;
  currYear = Number(currYear);

  if(!document.getElementById('day').checkValidity()) {
      document.getElementById('result').innerHTML = 'Invalid date. Please enter a valid date.';
      return;
  } else if (day > currDay) {
      document.getElementById('result').innerHTML = 'Invalid date. Date of birth cannot be in the future.';
      return;
  }

  if(!document.getElementById('month').checkValidity()) {
      document.getElementById('result').innerHTML = 'Invalid date. Please enter a valid date.';
      return;
  } else if (month > currMonth) {
      document.getElementById('result').innerHTML = 'Invalid date. Date of birth cannot be in the future.';
      return;
  }

  if(!document.getElementById('year').checkValidity()) {
      document.getElementById('result').innerHTML = 'Invalid date. Please enter a valid date.';
      return;
  } else if (year > currYear) {
      document.getElementById('result').innerHTML = 'Invalid date. Date of birth cannot be in the future.';
      return;
  }

  let years = currYear - year;
  let months = currMonth - month;
  let days = currDay - day;

  if(days < 0) {
      months--;
      days += new Date(currDay(), currMonth(), 0).getDate();
  }

  if(months < 0) {
      years--;
      months += 12;
  }

  document.getElementById('result1').innerHTML = years
  document.getElementById('result2').innerHTML = months
  document.getElementById('result3').innerHTML = days
});


document.getElementById('ageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Retrieving input values
  const ageDay = parseInt(document.getElementById('day').value);
  const ageMonth = parseInt(document.getElementById('month').value);
  const ageYear = parseInt(document.getElementById('year').value);

  // Checking if inputs are valid
  const currentYear = new Date().getFullYear();

  // if (isNaN(ageDay) || isNaN(ageMonth) || isNaN(ageYear)) {
  //     alert('Please enter valid numerical values for day, month, and year.');
  //     return;
  // }

  // if (ageDay <= 0 || ageMonth <= 0 || ageYear <= 0 || ageYear < 1900 || ageYear > currentYear || ageMonth > 12 || ageDay > 31) {
  //     document.getElementById('result').innerHTML = 'Please enter valid values for day, month, and year.';
  //     return;
  // }

  // Calculating age
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

  // Displaying results
  document.getElementById('result1').innerHTML = years;
  document.getElementById('result2').innerHTML = months;
  document.getElementById('result3').innerHTML = days;

  // Handling error message display
  const errorMessage = document.getElementById('error-message');

  if (errorMessage) {
      errorMessage.style.display = 'none'; // Hide error message if it's already displayed
  }

  // Setting timeout to remove error message after 5 seconds
  setTimeout(function() {
      if (errorMessage) {
          errorMessage.style.display = 'none';
      }
  }, 5000);
});



// document.getElementById('ageForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const ageDay = document.getElementById('day').value;
//     const ageMonth = document.getElementById('month').value;
//     const ageYear = document.getElementById('year').value;

//     const BIRTHDATE = `${year}-${month + 1}-${day}`;

//     const birthdate = new Date(BIRTHDATE);
//     const today = new Date();

//     const ageInMilliseconds = today - birthdate;
//     const ageInSeconds = ageInMilliseconds / 1000;
//     const ageInMinutes = ageInSeconds / 60;
//     const ageInHours = ageInMinutes / 60;
//     const ageInDays = ageInHours / 24;

//     const years = Math.floor(ageInDays / 365);
//     const months = Math.floor((ageInDays % 365) / 30);
//     const days = Math.floor((ageInDays % 365) % 30);

//     console.log(`You are ${years} years, ${months} months, and ${days} days old.`);

// });