function addition_function() {          //creates and names a function "addition_function()"//
    var addition = 5 + 5;       //assigns variable "addition" to add 5 + 5//
    document.getElementById("addition_operation").innerHTML = addition;         //finds an element within an HTML file named "addition_operation"" and performs the function//
}

function subtraction_function() {       //creates and names a function "subtraction_function()"//
    var subtraction = 10 - 5;       //assigns variable "subtraction" to add 10 - 5//
    document.getElementById("subtraction_operation").innerHTML = subtraction;       //finds an element within an HTML file named "subtraction_operation" and performs the function//
}

function multiplication_function() {        //creates and names a function "multiplication_function()"//
    var multiplication = 2 * 3;         //assigns variable "multiplication" to multiply 2 * 3//
    document.getElementById("multiplication_operation").innerHTML = multiplication;         //finds an element within an HTML file named "multiplication_operation" and performs the function//
}

function division_function() {      //creates and names a function "division_function()"//
    var division = 6 / 3;       //assigns variable "division" to divide 6 / 3//
    document.getElementById("division_operation").innerHTML = division;         //finds an element within an HTML file named "division_operation" and performs the function//
}

function multiple_operations_function() {       //creates and names a function "multiple_operations_function()"//
    var multiple_operations = 10 * 5 + 4 / 2;       //assigns variable "multiple_operations" to solve equation 10 * 5 + 4 / 2//
    document.getElementById("multiple_operations_operation").innerHTML = multiple_operations;       //finds an element within an HTML file named "multiple_operations_operation" and performs the function//
}

function modulus_function() {       //creates and names a function "modulus_function()"//
    var modulus = 5 % 2;        //assigns variable "modulus" to divide 5 / 2 and print the remainder//
    document.getElementById("modulus_operation").innerHTML = modulus;       //finds an element within an HTML file named "modulus_operation" and performs the function//
}

function negation_function() {      //creates and names a function "negation_function()"//
    var negation = 5;       //assigns variable "negation" to print the negative of 5//
    document.getElementById("negation_operation").innerHTML = -negation;        //finds an element within an HTML file named "negation_operation" and performs the function//
}

function increment_function() {         //creates and names a function "increment_function()"//
    var increment = 5;            //assigns variable "increment" to 5//
    increment++;        //tells variable "increment" to increment by 1//
    document.getElementById("increment_operation").innerHTML = increment;       //finds an element within an HTML file named "increment_operation" and performs the function//
}

function decrement_function() {         //creates and names a function "decrement_function()"//
    var decrement = 5;      //assigns variable "decrement" to 5//
    decrement--;        //tells variable "decrement" to decrement by 1//
    document.getElementById("decrement_operation").innerHTML = decrement;       //finds an element within an HTML file named "decrement_operation" and performs the function//
}

function random_function() {        //creates and names a function "random_function()"//
    var random = (Math.random());       //assigns variable "random" that prints a random number between 0 and 1//
    document.getElementById("random_operation").innerHTML = random;         //finds an element within an HTML file named "random_operation" and performs the function//
}

function math_object_function() {       //creates and names a function "math_object_function()"//
    var math_object = Math.PI;      //assigns variable "math_object" to print the value of pi//
    document.getElementById("math_object_operation").innerHTML = math_object;       //finds an element within an HTML file named "math_object_operation" and performs the function//
}

function math_method_function() {       //creates and names a function "math_method_function()"//
    var math_method = Math.round(5.6);      //assigns variable "math_method" and rounds the number 5.6 to the nearest integer//
    document.getElementById("math_method_operation").innerHTML = math_method;       //finds an element within an HTML file named "math_method_operation" and performs the function//
}