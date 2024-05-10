#! /usr/env/bin node
import inquirer from "inquirer";
let trick = await inquirer.prompt([
    {
        name: "trck",
        message: "Do you want to learn a trick?",
        type: "list",
        choices: ["yes", "no"]
    }
]);
if (trick.trck === "yes") {
    let answer = await inquirer.prompt([
        {
            name: "wifiPasswored",
            message: "Do you want to know your wifi passwored your computer or laptop is connected with",
            type: "list",
            choices: ["Yes", "No"],
        }
    ]);
    if (answer.wifiPasswored === "Yes") {
        console.log("To know wifi passwored connected to your computer or laptop");
        console.log("You just have to follow steps given bellow:");
        console.log("1)Press windows button + r. Run command wil be shown.");
        console.log("2)Then type {ncpa.cpl} and press enter, a window will be open.");
        console.log("3)Double click on wifi.");
        console.log("4)Go to wifi properties, and then go to security.");
        console.log("5)Click on show character.Your passwored will be shown.");
    }
    else if (answer.wifiPasswored === "No") {
        console.log("Ok, as you wish.");
    }
}
