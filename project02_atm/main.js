"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var bankBalance = 0;
function AccountAction(command) {
    if (command === 1) {
        console.log("your bank balance ".concat(bankBalance));
        var givenMoney = Number(prompt("Please type the money amount you want to save: "));
        bankBalance += givenMoney;
        console.log("Nice now you current bacnk balance is ".concat(bankBalance));
    }
    else if (command === 2) {
        var givenMoney = Number(prompt("Please type the money you want to deposit"));
        if (givenMoney > bankBalance) {
            console.log("your bank balance ".concat(bankBalance));
            console.log("there is not enough money!");
        }
        else {
            console.log("your bank balance ".concat(bankBalance));
            bankBalance -= givenMoney;
            console.log("Nice now you current bacnk balance is ".concat(bankBalance));
        }
    }
}
function StartAtm() {
    console.log("Welcome!");
    var userName = prompt("Please type the Name : ");
    var userId = Number(prompt("Please type the Id: "));
    console.log("you have successfully created you bank atm account!");
    console.log("please type the correct name and id to continue further");
    var bankOpen = true;
    while (bankOpen) {
        var askedName = prompt("Type the Name: ");
        var askedId = Number(prompt("Type THe Id: "));
        if (askedId != userId || askedName != userName) {
            console.log("following id and name are not corretc please try again!");
            continue;
        }
        else {
            console.log("welcome ".concat(userName));
            var openAccount = true;
            while (openAccount) {
                console.log("Your current balance is ".concat(bankBalance));
                console.log("Type the following commands to perform action:");
                console.log("1# Add Money");
                console.log("2# deposit Money");
                console.log("3# close account");
                var action = Number(prompt("please type the command here : "));
                if (action === 3) {
                    break;
                }
                else {
                    AccountAction(action);
                }
            }
            break;
        }
    }
}
StartAtm();
