document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const ageDay = parseInt(document.getElementById('day').value);
    const ageMonth = parseInt(document.getElementById('month').value);
    const ageYear = parseInt(document.getElementById('year').value);

    const currentYear = new Date().getFullYear();

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        document.getElementById(elementId + 'Input').style.border = "1px solid red";
        document.getElementById('label' + elementId.charAt(0).toUpperCase() + elementId.slice(1)).style.color = "red";

        setTimeout(() => {
            errorElement.remove();
            document.getElementById(elementId + 'Input').style.border = "";
            document.getElementById('label' + elementId.charAt(0).toUpperCase() + elementId.slice(1)).style.color = "";
        }, 5000);
    }

    if (isNaN(ageDay) || isNaN(ageMonth) || isNaN(ageYear)) {
        showError('dayError', 'This field is required');
        return;
    }

    // if (isNaN(ageMonth)) {
    //     showError('dayError2', 'This field is required');
    //     return;
    // }

    // if (isNaN(ageYear)) {
    //     showError('dayError3', 'This field is required');
    //     return;
    // }

    if (ageDay <= 0 || ageMonth <= 0 || ageYear <= 0 || ageYear < 1900 || ageYear > currentYear - 1 || ageMonth > 12 || ageDay > 31) {
        const errorMessage = document.getElementById('result');
        errorMessage.textContent = 'Invalid date. Please enter a valid date.';

        setTimeout(function() {
            errorMessage.remove();
        }, 5000);

        return;
    }

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
