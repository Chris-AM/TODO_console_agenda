const colors = require('colors');
const readline = require('readline');

const showMenu = () =>  {

    console.clear()

    return new Promise((resolve) => {

        console.log("========================".rainbow);
        console.log("   Select an option".green);
        console.log("========================\n".rainbow);
    
        console.log(`${'1.'.green} Create TODO List`);
        console.log(`${'2.'.green} Show TODO List`);
        console.log(`${'3.'.green} Show TODO Completed List`);
        console.log(`${'4.'.green} Show Pending TODO List`);
        console.log(`${'5.'.green} Check TODO List`);
        console.log(`${'6.'.green} Drop TODO`);
        console.log(`${'0.'.green} EXIT\n`);
    
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Select an option ', (answer) => {
            rl.close();
            resolve(answer);
        });
    
    });

    

}

const pause = () =>{

    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(`\n Press ${'Enter'.grey.underline} to continue \n`, (answer) => {
            rl.close();
            resolve()
        });
    });
}



module.exports = {
    showMenu,
    pause
}