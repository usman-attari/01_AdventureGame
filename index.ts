import chalk from "chalk"
import inquirer from "inquirer"
// classes player & opponent
class player {
    name:string;
    fuel:number =100
    constructor (name:string) {
        this.name=name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent {
    name:string
    fuel:number =100
    constructor (name:string) {
        this.name=name
    }
fuelDecrease(){
    let fuel = this.fuel - 25
    this.fuel = fuel
}
}
// player name & opponent select
let Player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please Enter Your Name: "
})
// console.log(Player.name)
 let opponent = await inquirer.prompt ({
    type:"list",
    name:"select",
      message:"Select Your Opponent",
     choices:["skeleton", "Assassin","Zombie" ]
 })
//  console.log(opponent.select)
 // Gather Data
 let p1 = new player(Player.name);
 let o1 = new Opponent(opponent.select);

    do {  
  //Skeleton 
         if (opponent.select == "skeleton"){
        // console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);

    let ask = await inquirer.prompt ({
        type:"list",
        name:"opt",
          message:"Select Your Opponent",
         choices:["Attack", "Drink Portion","Run For Your Life.." ]
    })
    if(ask.opt == "Attack" ){
        let num = Math.floor(Math.random()* 2)
        if (num > 0){
            p1.fuelDecrease()
            // console.log(chalk.bold.italic.green(`You Drink Heath Portion Your fuelis ${p1.fuel}`))
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if( p1.fuel <= 0){
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
                process.exit()
            }

        }
        if(num <= 0){
            o1.fuelDecrease()
            if( o1.fuel <= 0){
                console.log(chalk.green.bold.italic("You win"))
                process.exit()
            }
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
     
        }
         
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.red.bold.green (`You Drink Health Portion Your fuel is ${p1.fuel}`))
    }

    if(ask.opt =="Run For Your Life.."){
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
        
    }
   }

 // Assassin
   if (opponent.select ==  "Assassin"){
    // console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);

let ask = await inquirer.prompt ({
    type:"list",
    name:"opt",
      message:"Select Your Opponent",
     choices:["Attack", "Drink Portion","Run For Your Life.." ]
})
if(ask.opt == "Attack" ){
    let num = Math.floor(Math.random()* 2)
    if (num > 0){
        p1.fuelDecrease()
        // console.log(chalk.bold.italic.green(`You Drink Heath Portion Your fuelis ${p1.fuel}`))
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if( p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
            process.exit()
        }

    }
    if(num <= 0){
        o1.fuelDecrease()
        if( o1.fuel <= 0){
            console.log(chalk.green.bold.italic("You win"))
            process.exit()
        }
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
 
    }
     
}
if(ask.opt == "Drink Portion"){
    p1.fuelIncrease()
    console.log(chalk.red.bold.green (`You Drink Health Portion Your fuel is ${p1.fuel}`))
}

if(ask.opt =="Run For Your Life.."){
    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
    
}
} 
 // Zombie
if (opponent.select == "Zombie"){
    // console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);

let ask = await inquirer.prompt ({
    type:"list",
    name:"opt",
      message:"Select Your Opponent",
     choices:["Attack", "Drink Portion","Run For Your Life.." ]
})
if(ask.opt == "Attack" ){
    let num = Math.floor(Math.random()* 2)
    if (num > 0){
        p1.fuelDecrease()
        // console.log(chalk.bold.italic.green(`You Drink Heath Portion Your fuelis ${p1.fuel}`))
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if( p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
            process.exit()
        }

    }
    if(num <= 0){
        o1.fuelDecrease()
        if( o1.fuel <= 0){
            console.log(chalk.green.bold.italic("You win"))
            process.exit()
        }
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
 
    }
     
}
if(ask.opt == "Drink Portion"){
    p1.fuelIncrease()
    console.log(chalk.red.bold.green (`You Drink Health Portion Your fuel is ${p1.fuel}`))
}

if(ask.opt =="Run For Your Life.."){
    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
    
}
}

}
    while(true)


