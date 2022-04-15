function concatenated_sentence() {
    var part_1 = "This is ";
    var part_2 = "my concatenated ";
    var part_3 = "sentence!";
    var concatenated_sentence = part_1.concat(part_2, part_3);
    document.getElementById("concatenate").innerHTML = concatenated_sentence;
}

function sliced_sentence() {
    var sentence = "... life is like a box of chocolates.";
    var section = sentence.slice(26, 36);
    document.getElementById("slice").innerHTML = section;
}

function uppercase_function() {
    var uppercase = "Hello, World!";
    document.getElementById("uppercase").innerHTML = uppercase.toUpperCase();
}

function search_function() {
    var search = "This is my string.";
    document.getElementById("search").innerHTML = search.search("string");
}

function toString_function() {
    var x = 15;
    document.getElementById("number_to_string").innerHTML = x.toString();
}

function precision_method() {
    var x = 12345.6789;
    document.getElementById("precision").innerHTML = x.toPrecision(6);
}

function toFixed_method() {
    var x = 12345.6789;
    document.getElementById("toFixed").innerHTML = x.toFixed(2);
}

function valueOf_method() {
    var x = "Hello, World!";
    document.getAnimations("valueOf").innerHTML = x.valueOf();
}