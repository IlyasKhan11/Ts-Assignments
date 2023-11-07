"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var random = Math.round(Math.random() + 100);
var enemies = ['skeletons', 'Zombie', 'warrior', 'Assasin'];
var maxEnemyHealth = 75;
var maxEnemyDamage = 25;
// for player
var health = 100;
var attackDamae = 50;
var numHealthPosition = 30;
var healthPositionAmount = 30;
var healthPositionDropChance = 50;
var running = true;
console.log("Welcome to the Dungeon");
while (running) {
    console.log("--------------------------------------------------------------------------------------------------------");
    var random_1 = Math.round(Math.random() * maxEnemyDamage);
    var enemyHealth = random_1;
    var enemy = enemies[Math.round(Math.random() * enemies.length - 1)];
    console.log("".concat(enemy, " appeared \n"));
    while (enemyHealth > 0) {
        console.log("Your HP: ".concat(health));
        console.log("enemys HP: ".concat(enemyHealth));
        console.log("What would you like to do?");
        console.log("1.Attack");
        console.log("2.Drink Halth potion");
        console.log("3.RUn");
        var response = Number(prompt("type Command: "));
        if (response === 1) {
            var damageDealt = Math.round(Math.random() * attackDamae);
            var damageTaken = Math.round(Math.random() * maxEnemyDamage);
            enemyHealth -= damageDealt;
            health -= damageTaken;
            console.log("You striked the ".concat(enemy, " for damageDealt ").concat(damageDealt));
            console.log("you received ".concat(damageTaken, " in retaliation"));
            if (health < 1) {
                console.log("You received too many damage you are weak to go on!");
                break;
            }
        }
        else if (response === 2) {
            if (numHealthPosition > 0) {
                health += healthPositionAmount;
                numHealthPosition--;
                console.log("you are drink a health healing yourself  for ".concat(healthPositionAmount, " you now have ").concat(health, " Hp, you are ").concat(numHealthPosition, " health position left"));
            }
            else {
                console.log("You have no health Potions, left Defeat enemeies for a chance to gain them.");
            }
        }
        else if (response == 3) {
            console.log("you ran away from the enemy ".concat(enemy));
            break;
        }
        else {
            console.log("Invalid Command");
        }
    }
    if (health < 1) {
        console.log("you limp out of the dungeon weak from battle");
        break;
    }
    console.log('==========================================================');
    console.log("enemy ".concat(enemy, " was defeated"));
    console.log("you have ".concat(health, " HP left"));
    if (Math.round(Math.random() * 100) < healthPositionDropChance) {
        numHealthPosition++;
        console.log("The Enem dropped a health potion");
        console.log("you have ".concat(numHealthPosition, " health potions"));
    }
    console.log("-----------------------------------------------------");
    console.log("What would you like to do now?");
    console.log("1.Continue");
    console.log('2.Dungeon');
    var decision = Number(prompt("Please select the decision: "));
    while (!decision) {
        console.log("invalid Command");
        decision = Number(prompt("Please select the decision: "));
    }
    if (decision === 1) {
        console.log("you continued to your advenctures");
    }
    if (decision == 2) {
        console.log("you break the dungron");
        break;
    }
}
