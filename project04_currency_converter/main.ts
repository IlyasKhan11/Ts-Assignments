import * as promptSync from 'prompt-sync'

const prompt=promptSync();

const DollarPerPkr=350;
const PountPerPkr=370;
const EuroPerPkr=340;

function Calculate(currency:number,amount:number){
    if(currency===1){
        console.log(`Dollars: ${amount/DollarPerPkr}`)
    }
    else if(currency===2){
        console.log(`Pounds: ${amount/PountPerPkr}`)
    }
    else if(currency===3){
        console.log(`Euro: ${amount/EuroPerPkr}`)
    }
    else{
        console.log("Invalid Value!")
    }
}


function CurrencyConverter(){
    console.log("Welcome to the currency COnverter app!")
    let isOpen=true;

    while(isOpen){
        console.log("HI, please choose a currncy: ")
        console.log("1#Dollar")
        console.log("2#Pound")
        console.log("3#Euro")

        let choice=Number(prompt("Type the command Number : "))
        let amount=Number(prompt("please type the pkr amount: "))

        if(typeof(choice)!='number' || typeof(amount)!='number'){
            console.log("please try again!")
            continue;
        }
        else{
            Calculate(1,amount)
        }

    }
}



CurrencyConverter()