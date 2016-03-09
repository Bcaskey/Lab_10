
function calculate(operation) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    var result = 0;
    switch (operation) {
        case 'add':
            davidsLib.add(num1, num2, function(err, result) {
                if (err) {
                    alert(err + 'This is running');
                } else {
                    alert('Yea, the answer is: ' + result)
                }
            });
            break;
        case 'subtract':
            davidsLib.subtract(num1, num2, function(err, result) {
                if (err) {
                    alert(err + 'This is running');
                } else {
                    alert('Yea, the answer is: ' + result)
                }
            });
            break;
        case 'multiply':
            davidsLib.multiply(num1, num2, function(err, result) {
                if (err) {
                    alert(err + 'This is running');
                } else {
                    alert('Yea, the answer is: ' + result)
                }
            });
            break;
        case 'divide':
            davidsLib.divide(num1, num2, function(err, result) {
                if (err) {
                    alert(err + 'This is running');
                } else {
                    alert('Yea, the answer is: ' + result)
                }
            });
            break;
    }
}

