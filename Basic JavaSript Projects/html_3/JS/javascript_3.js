function displayType(game) {
    var homeConsole = game.getAttribute("data-home-console");
    alert(game.innerHTML  + " was the owner of the original console on which the " + homeConsole + " series was released!");
}