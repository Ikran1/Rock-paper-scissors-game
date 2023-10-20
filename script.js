var choices = ["R", "P", "S"];
// var computer = choices[Math.floor(Math.random()*choices.length)];
// var user = prompt("Choose R, P, S");


for (var i=0; i<10; i++) {
    var computer = choices[Math.floor(Math.random()*choices.length)];
    var user = prompt("Choose R, P, S");
    if (user === computer) {
        alert("It's a tie");
        tie += 1;
    } else if (user === "P" && computer === "R") {
        alert("You win");
        win += 1;
    } else if (user === "S" && computer === "P") {
        alert("You win");
        win += 1;
    } else if (user === "R" && computer === "S") {
        alert("You win");
        win += 1;
    } else{
        alert("You loose!");
        loose += 1;
    }
}

var tie = 0;
var win = 0;
var loose = 0;

alert("It was a tie"+ tie);
alert("You won" + win);
alert("You lost" + loose);
