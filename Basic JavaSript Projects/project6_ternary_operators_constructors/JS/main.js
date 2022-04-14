function ride_function() {      //creates and names function "ride_function"//
    var height, can_ride;       //sets variable names "height" and "can_ride"
    height = document.getElementById("height").value;       //finds element with id "height" in HTML and sets the value of "height" as the value found//
    can_ride = (height < 52) ? "You are too short":"You are tall enough";       //sets "can_ride" as a ternary operator//
    document.getElementById("ride").innerHTML = can_ride + " to ride.";     //finds element with id "ride" in HTML and prints the result of the function//
}

function vote_function() {      //creates and names function "vote_function"//
    var age, can_vote;      //sets variable names "age" and "can_vote"
    age = document.getElementById("age").value;     //finds element with id "age" in HTML and sets the value of "age" as the value found//
    can_vote = (age < 18) ? "You are not old enough":"You are old enough";      //sets "can_vote" as a ternary operator//
    document.getElementById("vote").innerHTML = can_vote + " to vote.";     //finds element with id "ride" in HTML and prints the result of the function//
}

function device(Make, Model, Year) {        //creates and names function "ride_function" with objects "Make", "Model", and "Year"//
    this.device_Make = Make;        //sets device_Make's value as Make//
    this.device_Model = Model;      //sets device_Model's value as Model//
    this.device_Year = Year;        //sets device_Year's value as Year//
}

var Glenn = new device("Samsung", "Galaxy S22", "2022");        //adds variable named Glenn with object device//
var Serah = new device("Apple", "iPhone", "2021");      //adds variable named Serah with object device//

function new_and_this_function() {      //creates and names function "new_and_this_function"//
    document.getElementById("new_and_this").innerHTML =         //finds HTML element with id "new_and_this"
    "Glenn owns a " + Glenn.device_Make + " " + Glenn.device_Model + " from " + Glenn.device_Year + ".";        //prints this where the HTML element was found//
}

function addition_function() {      //creates and names function "addition_function()"//
    document.getElementById("nested_function").innerHTML = addition();      //finds HTML element with id "nested_function" and performs nested functiong "addition()"//
    function addition() {       //creates and names function "addition()"//
        var starting_point = 10;        //creates variable "starting_point" and sets its value to 10//
        function add_two() {starting_point += 2;}       //creates function "add_two()" and sets what it will do//
        add_two();      //performs function "add_two()"//
        return starting_point;      //prints the conclusion to the function//
    }
}