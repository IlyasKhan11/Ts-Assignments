"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var gameOn = true;
var randomNumber = Math.round(Math.random() * 10);
while (gameOn) {
    var userAns = Number((0, prompt_sync_1.default)("Please type a random number?(1-".concat(10, ")")));
    if (typeof (userAns) != 'number') {
        console.log("Please type a number");
    }
    if (userAns > randomNumber) {
        console.log("Too High");
    }
    else if (userAns < randomNumber) {
        console.log("Too Low");
    }
    else if (userAns === randomNumber) {
        console.log("congratualtions! you won the game!");
    }
}
