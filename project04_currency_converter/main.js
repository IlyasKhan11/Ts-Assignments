"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var DollarPerPkr = 350;
var PountPerPkr = 370;
var EuroPerPkr = 340;
function Calculate(currency, amount) {
    if (currency === 1) {
        console.log("".concat(amount / DollarPerPkr));
    }
    else if (currency === 2) {
        console.log("".concat(amount / PountPerPkr));
    }
    else if (currency === 3) {
        console.log("".concat(amount / EuroPerPkr));
    }
    else {
        console.log("Invalid Value!");
    }
}
function CurrencyConverter() {
    console.log("Welcome to the currency COnverter app!");
    var isOpen = true;
    while (isOpen) {
        console.log("HI, please choose a currncy: ");
        console.log("1#Dollar");
        console.log("2#Pound");
        console.log("3#Euro");
        var choice = Number(prompt("Type the command Number : "));
        var amount = Number(prompt("please type the pkr amount: "));
        if (typeof (choice) != 'number' || typeof (amount) != 'number') {
            console.log("please try again!");
            continue;
        }
        else {
            Calculate(1, amount);
        }
    }
}
CurrencyConverter();
