const Task = require('./task');
const colors = require('colors');
class Tasks {

    _taskList = {};

    get arrayList() {

        const TASKS_LIST = [];
        Object.keys(this._taskList).forEach(id => {
            const TASK = this._taskList[id];
            TASKS_LIST.push(TASK)
        });
        return TASKS_LIST;
    }

    constructor() {
        this._taskList = {};

    }

    loadArrayList(tasks = []) {
        tasks.forEach(task => {
            this._taskList[task.id] = task;
        })
    }

    createTask(description = '') {

        const task = new Task(description);
        this._taskList[task.id] = task;


    }

    listTasks() {

        console.log('\n');

        this.arrayList.forEach((task, i) => {
            const positionInList = `${i + 1}`.green;
            const description = task.description;
            const isFinished = task.completedIn;
            const stateOfFinished = (isFinished) ? 'Finished'.green : 'Incompleted'.red;
            console.log(`${positionInList} ${description} :::: ${stateOfFinished}`);

        });

    }

    listFinished(finished = true) {

        console.log('\n');

        let index = 0;
        this.arrayList.forEach(task => {

            const {description, completedIn} = task;
            const STATE = (finished) ? 'Finished'.green : 'Pending'.red;

            if (finished) {
                
                if (completedIn) {
                    index += 1;
                    console.log(`${index.toString().green} ${description} :::: ${STATE}`);
                }
            } else {
               
                if (!completedIn) {
                    
                    index += 1;
                    console.log(`${index.toString().green} ${description} :::: ${STATE}`);
                }

            }
        });


    }
}

module.exports = Tasks;