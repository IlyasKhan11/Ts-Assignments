import * as promptSync from "prompt-sync";
const prompt = promptSync();


let words:number=0
let letters:number=0

let isOn=true


function countWords(sentence:'string'):number{
    let sentenceArr:number=sentence.split(" ").length
    return sentenceArr;
}

function countLetters(sentence:'string'):number{
    let count:number=0;
    let letterArr=sentence.split(" ")
    letterArr.forEach(function(ele){
        let letterBreak=ele.split("")
        let wordLetterCount=letterArr.length
        count=count+wordLetterCount
    })

    return count-1;
}

while(isOn){
    console.log("welcome! lets start, please start typing: ")
    console.log('Type "off" to shutdown')
    let input=prompt("Type Here:  ")
    if(input==='off'){
        isOn=false
    }
    console.log(`Your Text: "${input}"`)
    console.log('------------------------------------')
    console.log(`your typed ${countWords(input)} words`)
    console.log('---------------------------------------')
    console.log(`your total typed letters are : ${countLetters(input)}`)

}