function addition_function() {
    var addition = 5 + 5;
    document.getElementById("addition_operation").innerHTML = addition;
}

function subtraction_function() {
    var subtraction = 10 - 5;
    document.getElementById("subtraction_operation").innerHTML = subtraction;
}

function multiplication_function() {
    var multiplication = 2 * 3;
    document.getElementById("multiplication_operation").innerHTML = multiplication;
}

function division_function() {
    var division = 6 / 3;
    document.getElementById("division_operation").innerHTML = division;
}

function multiple_operations_function() {
    var multiple_operations = 10 * 5 + 4 / 2;
    document.getElementById("multiple_operations_operation").innerHTML = multiple_operations;
}

function modulus_function() {
    var modulus = 5 % 2;
    document.getElementById("modulus_operation").innerHTML = modulus;
}

function negation_function() {
    var negation = 5;
    document.getElementById("negation_operation").innerHTML = -negation;
}

function increment_function() {
    var increment = 5;
    increment++;
    document.getElementById("increment_operation").innerHTML = increment;
}

function decrement_function() {
    var decrement = 5;
    decrement--;
    document.getElementById("decrement_operation").innerHTML = decrement;
}

function random_function() {
    var random = (Math.random());
    document.getElementById("random_operation").innerHTML = random;
}

function math_object_function() {
    var math_object = Math.PI;
    document.getElementById("math_object_operation").innerHTML = math_object;
}

function math_method_function() {
    var math_method = Math.round(5.6);
    document.getElementById("math_method_operation").innerHTML = math_method;
}