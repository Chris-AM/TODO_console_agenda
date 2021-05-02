const colors = require('colors');
const { inquirerMenu, inquirerPause } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

console.clear();

const main = async () => {

    let answer = ''
    do {

        answer = await inquirerMenu();
        console.log({ answer });
     
        await inquirerPause();

    } while (answer !== '0');

}

main();