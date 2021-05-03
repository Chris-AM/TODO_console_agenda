const Task = require('./task');

class Tasks {

    _taskList = {};

    constructor() {
        this._taskList = {};

    }

    createTask (description = '') {

        const task = new Task(description);
        this._taskList[task.id] = task;
        

    }
}

module.exports = Tasks;