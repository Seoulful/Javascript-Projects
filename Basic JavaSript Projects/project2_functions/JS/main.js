function my_first_function() { //assigns a name to the function//
    var str = "This is the button text!"; //assigns the variable "str" with a string//
    document.getElementById("button_text").innerHTML = str; //tells the script to run when the specified id is called//
}

function myFunction() { //assigns a name to the function//
    var sentence = "I am concatenating "; //assigns the variable "sentence" with two strings to concatenate//
    sentence += "these two strings.";
    document.getElementById("Concatenate").innerHTML = sentence; //tells the script to run when the specified id is called//
}