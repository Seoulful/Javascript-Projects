document.write(typeof 6.5);

document.write("15" + 16);

function infinity_function() {
    infinity = 3E310;
    document.getElementById("infinity_operation").innerHTML = infinity;
}

function negative_infinity_function() {
    negative_infinity = -3E310;
    document.getElementById("negative_infinity_operation").innerHTML = negative_infinity;
}

document.write(5 < 6);

document.write(6 < 5);

console.log(5 + 6);

console.log(12 <= 10);

document.write(10 + 1 == 11);

document.write(4 + 7 == 10);

a = 10;
b = 10;
c = "five";
d = "10";
e = 7;

document.write(a === b);

document.write(a === c);

document.write(a === d);

document.write(a === e);

document.write(10 > 9 && 4 > 2);

document.write(9 > 10 && 4 > 2);

document.write(10 > 9 || 5 < 4);

document.write(10 < 9 || 5 < 2);

function not_function() {
    document.getElementById("not").innerHTML = !(10 > 20);
}

function not_function_false() {
    document.getElementById("not_false").innerHTML = !(20 > 10);
}