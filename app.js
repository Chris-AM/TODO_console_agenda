const colors = require('colors');
const { inquirerMenu, 
        inquirerPause,
        inquirerReadInput } = require('./helpers/inquirer'); 
const Tasks = require('./models/tasks');

console.clear();

const main = async () => {

    let answer = ''

    const tasks = new Tasks();

    do {

        answer = await inquirerMenu();
        
        switch(answer){
            case '1':
                const newTask = await inquirerReadInput('Description:');
                tasks.createTask(newTask);
            break

            case '2':
                console.log(tasks._taskList);
        }
     
        await inquirerPause();

    } while (answer !== '0');

}

main();