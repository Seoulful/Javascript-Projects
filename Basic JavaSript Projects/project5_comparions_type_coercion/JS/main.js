document.write(typeof 6.5); //prints the type of the specified element, in this case, number//

document.write("15" + 16); //adds the string "15" and the number 16 together, outputting 1516//

function infinity_function() {  //creates and names function "infinity_function"//
    infinity = 3E310;   //sets variable "infinity" as 3E310//
    document.getElementById("infinity_operation").innerHTML = infinity;     //finds HTML element with the "infinity_operation" id and performs function//
}

function negative_infinity_function() {     //creates and names function "negative_infinity_function"//
    negative_infinity = -3E310;     //sets variable "negative_infinity" as -E3310//
    document.getElementById("negative_infinity_operation").innerHTML = negative_infinity;   //finds html element with the "negative_infinity_operation" id and performs function//
}

document.write(5 < 6);  //checks to see if operation is true or false, then prints the answer//

document.write(6 < 5);  //checks to see if operation is true or false, then prints the answer//

console.log(5 + 6);   //performs operation and prints answer in the browser's console log//

console.log(12 <= 10);    //checks to see if operation is true or false, then prints answer in browser's console log//

document.write(10 + 1 == 11);   //checks to see if 10 + 1 is equal to 11, then prints true or false//

document.write(4 + 7 == 10);    //checks to see if 4 + 7 is equal to 10, then prints true or false//

a = 10;     //assigns variable "a" to 10
b = 10;     //assigns variable "b" to 10;
c = "five";     //assigns variable "c" to "five"//
d = "10";       //assigns variable "d" to "10"//
e = 7;      //assigns variable "e" to 7//

document.write(a === b);    //checks to see if "a" and "b" are the same value and type, then prints true or false//

document.write(a === c);    //checks to see if "a" and "c" are the same value and type, then prints true or false//

document.write(a === d);    //checks to see if "a" and "d" are the same value and type, then prints true or false//

document.write(a === e);    //checks to see if "a" and "e" are the same value and type, then prints true or false//

document.write(10 > 9 && 4 > 2);    //checks to see if both statements are true, then prints true or false//

document.write(9 > 10 && 4 > 2);    //checks to see if both statements are true, then prints true or false//

document.write(10 > 9 || 5 < 4);    //checks to see if either statements are true, then prints true or false//

document.write(10 < 9 || 5 < 2);    //checks to see if either statements are true, then prints true or false//

function not_function() {       //creates function named "not_function"//
    document.getElementById("not").innerHTML = !(10 > 20);      //finds HTML element named "not" and performs function//
}

function not_function_false() {     //creates function named "not_function_false"//
    document.getElementById("not_false").innerHTML = !(20 > 10);        //finds HTML element named "not_false" and performs function//
}