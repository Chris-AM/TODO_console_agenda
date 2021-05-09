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

    deleteTaskById(id = '') {
        if (this._taskList[id]) {
            delete this._taskList[id];
        }
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
            const stateOfFinished = (isFinished) ? 'Completed'.green : 'Pending'.red;
            console.log(`${positionInList} ${description} :::: ${stateOfFinished}`);

        });

    }
    listFinished(finished = true) {
        console.log('\n');
        let index = 0;
        this.arrayList.forEach(task => {
            const { description, completedIn } = task;
            const STATE = (finished) ? 'Completed'.green : 'Pending'.red;
            if (finished) {
                if (completedIn) {
                    index += 1;
                    console.log(`${index.toString().green} ${description} :::: ${completedIn.green}`);
                }
            } else {
                if (!completedIn) {

                    index += 1;
                    console.log(`${index.toString().green} ${description} :::: ${STATE}`);
                }
            }
        });
    }

    togglingTask(ids = []) {

        ids.forEach(id => {
            const task = this._taskList[id];
            if (!task.completedIn) {
                ////////////////////////////////////////////////////
                //
                //      The toISOString() method returns a 
                //  string in simplified extended ISO format 
                //  (ISO 8601), which is always 24 or 27 characters 
                //  long 
                //
                /////////////////////////////////////////////////////
                task.completedIn = new Date().toISOString();
            }
        });


        this.arrayList.forEach(task => {

            if (!ids.includes(task.id)) {
                this._taskList[task.id].completedIn = null;
            }

        })
    }

}

module.exports = Tasks;