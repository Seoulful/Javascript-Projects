function call_loop() {
    var number = "";
    var x = 10;
    while (x > 0) {
        number += "<br>" + x;
        x--;
    }
    document.getElementById("loop").innerHTML = number;
}

function string_length_function() {
    var string = "Hello, World!";
    document.getElementById("string_length").innerHTML = string.length;
}

function for_loop() {
    var instruments = ["Clarinet", "Drums", "Piano", "French Horn", "Bass"];
    var content = "";
    var x;
    for (x = 0; x < instruments.length; x++) {
        content += instruments[x] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

function array_function() {
    var dog_picture = [];
    dog_picture[0] = "barking";
    dog_picture[1] = "eating";
    dog_picture[2] = "sleeping";
    dog_picture[3] = "playing";
    document.getElementById("array").innerHTML = "In this picture, the cat is " + dog_picture[3] + ".";
}

function constant_function() {
    const dog = {breed: "german shepherd", age: "two", gender: "male"};
    dog.age = "three";
    dog.color = "brown";
    document.getElementById("constant").innerHTML = dog.breed;
    document.getElementById("constant_string").innerHTML = "The dog is " + dog.age + " years old, and " + dog.color + ".";
}

var x = 22;
document.write(x);
{
    let x = 90;
    document.write("<br>" + x);
}
document.write("<br>" + x + "<br>");

function return_function() {
    return Math.E;
}
document.getElementById("return").innerHTML = return_function();

let car = {
    make: "Audi ",
    model: "R8 ",
    year: "2021 ",
    color: "silver ",
    description : function() {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();

function break_function() {
    var text = "";
    for (let x = 10; x > 0; x--) {
        if(x === 4) {break;}
        text += "<br>" + x;
    }
    document.getElementById("break").innerHTML = text;
}

function continue_function() {
    var text = "";
    for (let x = 10; x > 0; x--) {
        if(x === 4) {continue;}
        text += "<br>" + x;
    }
    document.getElementById("continue").innerHTML = text;
}