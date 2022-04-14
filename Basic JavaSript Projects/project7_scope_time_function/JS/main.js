x = 10

function global_variable_function() {
    global_variable_operation = x + 10;
    document.getElementById("global_variable").innerHTML = global_variable_operation;
}

function local_variable_function() {
    y = 20
    local_variable_operation = y + 10;
    document.getElementById("local_variable").innerHTML = local_variable_operation;
}

function if_statement_function() {
    if (new Date().getHours() > 12) {
        document.getElementById("method").innerHTML = "Hope you had a good morning!";
    }
}

if (10 > 5) {
    document.write("10 is greater than 5.");
}

function else_statement_function() {
    number = document.getElementById("else").value;
    if (number >= 5) {
        greater_or_less = "Your number would round up to 10!";
    }
    else {
        greater_or_less = "Your number would not round up to 10!";
    }
    document.getElementById("result").innerHTML = greater_or_less;
}

function time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }

    else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    }

    else {
        reply = "It is evening time.";
    }

    document.getElementById("time_of_day").innerHTML = reply;
}