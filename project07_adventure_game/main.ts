import * as promptSync from "prompt-sync";


const prompt = promptSync();

const random=Math.round(Math.random()+100);

const enemies:string[]=['skeletons','Zombie','warrior','Assasin'];

let maxEnemyHealth:number=75;
let maxEnemyDamage:number=25

// for player
let health:number=100;
let attackDamae:number=50;
let numHealthPosition:number=30
let healthPositionAmount:number=30
let healthPositionDropChance:number=50


let running:boolean=true;
console.log("Welcome to the Dungeon")

while(running){
    console.log("--------------------------------------------------------------------------------------------------------")
    const random=Math.round(Math.random()*maxEnemyDamage);
    let enemyHealth=random;
    let enemy=enemies[Math.round(Math.random()*enemies.length-1)]
    console.log(`${enemy} appeared \n`)
    while(enemyHealth>0){
        console.log(`Your HP: ${health}`)
        console.log(`enemys HP: ${enemyHealth}`)
        console.log(`What would you like to do?`)
        console.log("1.Attack")
        console.log("2.Drink Halth potion")
        console.log("3.RUn")
        let response=Number(prompt("type Command: "))
        if(response===1){
            let damageDealt=Math.round(Math.random()*attackDamae)
            let damageTaken=Math.round(Math.random()*maxEnemyDamage)
            enemyHealth -=damageDealt
            health -=damageTaken

            console.log(`You striked the ${enemy} for damageDealt ${damageDealt}`)
            console.log(`you received ${damageTaken} in retaliation`)

            if(health<1){
                console.log("You received too many damage you are weak to go on!")
                break;
            }
        }
        else if(response===2){
            if(numHealthPosition>0){
                health += healthPositionAmount
                numHealthPosition--
                console.log(`you are drink a health healing yourself  for ${healthPositionAmount} you now have ${health} Hp, you are ${numHealthPosition} health position left`)
            }
            else{
                console.log("You have no health Potions, left Defeat enemeies for a chance to gain them.")
            }
        }
        else if(response==3){
            console.log(`you ran away from the enemy ${enemy}`)
            break
        }
        else{
            console.log("Invalid Command")
        }


    }

    if(health<1){
        console.log("you limp out of the dungeon weak from battle")
        break;
    }

    console.log('==========================================================')
    console.log(`enemy ${enemy} was defeated`)
    console.log(`you have ${health} HP left`)

    if(Math.round(Math.random()*100) <healthPositionDropChance ){
        numHealthPosition++
        console.log("The Enem dropped a health potion")
        console.log(`you have ${numHealthPosition} health potions`)
    }
    console.log("-----------------------------------------------------")
    console.log("What would you like to do now?")
    console.log("1.Continue")
    console.log('2.Dungeon')

    let decision=Number(prompt("Please select the decision: "))
    while(!decision){
        console.log("invalid Command")
        decision=Number(prompt("Please select the decision: "))
    }
    if(decision===1){
        console.log("you continued to your advenctures")
    }
    if(decision==2){
        console.log("you break the dungron")
        break;
    }
}




















