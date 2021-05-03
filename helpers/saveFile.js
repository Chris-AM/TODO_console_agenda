const fs = require('fs');

const saveFile = (data) =>{

    /////////////////////////////////////////////
    //
    // writeFileSync parameters
    //      path: where i'm storing the file
    //      data: what i'm saving
    //
    /////////////////////////////////////////////
    const path = './db/tasks.json';
    fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = {
    saveFile
}