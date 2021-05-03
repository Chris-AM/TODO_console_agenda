const Task = require('./task');

class Tasks {

    _taskList = {};

    get arrayList(){

        const TASKS_LIST = [];
        Object.keys(this._taskList).forEach(id =>{
            const TASK = this._taskList[id];
            TASKS_LIST.push(TASK)
        });
        return TASKS_LIST;
    }

    constructor() {
        this._taskList = {};

    }

    createTask (description = '') {

        const task = new Task(description);
        this._taskList[task.id] = task;


    }
}

module.exports = Tasks;