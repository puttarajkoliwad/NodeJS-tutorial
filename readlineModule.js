//readline is an interface and also implements EventEmitter
const readline = require('readline');
const { stdin } = require('process');
const { isNumber } = require('util');
const rl = readline.createInterface({input:process.stdin, output:process.stdout});

console.log('Enter a number to find its square: ');
let num = rl.question('',(userInput)=>{
    if(Number.parseFloat(userInput.trim())){
        console.log(`The square of ${userInput} is: `+userInput**2);
        //console.log(typeof stdin);
        //console.log(typeof {stdin});
        //console.log(stdin);
        //console.log({stdin});
        rl.close();
    }
    else {
        rl.setPrompt('Invalid input. Please try again!\n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(Number.parseFloat(userInput.trim())){
                console.log(`The square of ${userInput} is: `+userInput**2);
                rl.close();
            }
            else{
                rl.setPrompt('Please enter a valid input: ');
                rl.prompt();
            }
        })
    }
})
rl.on('close',()=>console.log('Program executed successfully! readline closed...'));