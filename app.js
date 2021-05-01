const colors = require('colors');
const {showMenu, pause} = require('./helpers/messages');

console.clear();

const main = async () => {
    
    let answer = ''
    do {

       answer =  await showMenu();
       console.log({answer});
       if (answer !== '0') await pause();
       
    } while (answer !== '0');

}

main();