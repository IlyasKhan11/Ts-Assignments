import * as promptSync from 'prompt-sync'

const prompt=promptSync()
let bankBalance=0;

function AccountAction(command:number){
    if(command===1){
        console.log(`your bank balance ${bankBalance}`)
        let givenMoney=Number(prompt("Please type the money amount you want to save: "))
        bankBalance+=givenMoney
        console.log(`Nice now you current bacnk balance is ${bankBalance}`)

    }
    else if(command===2){
        let givenMoney=Number(prompt("Please type the money you want to deposit"))
        if (givenMoney>bankBalance){
            console.log(`your bank balance ${bankBalance}`)
            console.log("there is not enough money!")
        }
        else{
            console.log(`your bank balance ${bankBalance}`)
            bankBalance-=givenMoney
            console.log(`Nice now you current bacnk balance is ${bankBalance}`)
        }
    }

}




function StartAtm(){


    console.log("Welcome!")
    const userName:string=prompt("Please type the Name : ")
    const userId:number=Number(prompt("Please type the Id: "))
    console.log("you have successfully created you bank atm account!")

    console.log("please type the correct name and id to continue further")

    let bankOpen=true;

    while(bankOpen){
        const askedName:string=prompt("Type the Name: ")
        const askedId:number=Number(prompt("Type THe Id: "))

        if (askedId!=userId || askedName!=userName){
            console.log("following id and name are not corretc please try again!")
            continue;
        }
        else{
            console.log(`welcome ${userName}`)
            let openAccount=true;
            while(openAccount){
                console.log(`Your current balance is ${bankBalance}`)
                console.log("Type the following commands to perform action:")
                console.log("1# Add Money")
                console.log("2# deposit Money")
                console.log("3# close account")

                let action:number=Number(prompt("please type the command here : "))

                if(action===3){
                    break;
                }
                else{
                    AccountAction(action)
                }
            }
            break;
        }

    }


    
}





StartAtm()