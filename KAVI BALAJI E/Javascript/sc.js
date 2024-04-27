function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && height > 0) {
        var bmi = weight / (height * height);
        document.getElementById('result').innerHTML = 'Your BMI is ' + bmi.toFixed(2);
        
        if (bmi < 8.5) {
            document.getElementById('result').innerHTML += '<br>You are underweight.';
        } else if (bmi >= 12.5 && bmi <= 14.9) {
            document.getElementById('result').innerHTML += '<br>You are normal weight.';
        } else if (bmi >= 15 && bmi <= 29.9) {
            document.getElementById('result').innerHTML += '<br>You are overweight.';
        } else {
            document.getElementById('result').innerHTML += '<br>You are obese.';
        }
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
    }
}