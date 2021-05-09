const colors = require('colors');
const {
    inquirerMenu,
    inquirerPause,
    inquirerReadInput,
    inquirerDeleteList,
    inquirerDeleteConfirm,
    inquirerCheckToDo
} = require('./helpers/inquirer');
const { createFile, readFile } = require('./helpers/crudFile');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {

    let answer = ''
    const tasks = new Tasks();
    const READ_FILE = readFile();

    if (READ_FILE) {
        tasks.loadArrayList(READ_FILE);
    }

    do {
        answer = await inquirerMenu();

        switch (answer) {
            case '1':
                const newTask = await inquirerReadInput('Description:');
                tasks.createTask(newTask);
                break

            case '2':

                tasks.listTasks();
                break;

            case '3':

                tasks.listFinished(true);
                break;

            case '4':

                tasks.listFinished(false);
                break;

            case '5':

                const ids = await inquirerCheckToDo(tasks.arrayList);
                tasks.togglingTask(ids);
                break;

            case '6':
                const id = await inquirerDeleteList(tasks.arrayList);
                if (id !== '0') {
                    const confirm = await inquirerDeleteConfirm('are you sure?');
                    if (confirm) {
                        tasks.deleteTaskById(id);
                        console.log('task dropped successfuly')
                    }
                } else {
                    console.log("It's Ok bro!")
                }
                break;
        }

        createFile(tasks.arrayList);

        await inquirerPause();

    } while (answer !== '0');


}

main();