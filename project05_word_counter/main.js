"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var words = 0;
var letters = 0;
var isOn = true;
function countWords(sentence) {
    var sentenceArr = sentence.split(" ").length;
    return sentenceArr;
}
function countLetters(sentence) {
    var count = 0;
    var letterArr = sentence.split(" ");
    letterArr.forEach(function (ele) {
        var letterBreak = ele.split("");
        var wordLetterCount = letterArr.length;
        count = count + wordLetterCount;
    });
    return count - 1;
}
while (isOn) {
    console.log("welcome! lets start, please start typing: ");
    console.log('Type "off" to shutdown');
    var input = prompt("Type Here:  ");
    if (input === 'off') {
        isOn = false;
    }
    console.log("Your Text: \"".concat(input, "\""));
    console.log('------------------------------------');
    console.log("your typed ".concat(countWords(input), " words"));
    console.log('---------------------------------------');
    console.log("your total typed letters are : ".concat(countLetters(input)));
}
