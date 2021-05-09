const fs = require('fs');

const path = './db/tasks.json';

const createFile = (data) => {

    /////////////////////////////////////////////
    //
    // writeFileSync parameters
    //      path: where i'm storing the file
    //      data: what i'm saving
    //
    /////////////////////////////////////////////
    fs.writeFileSync(path, JSON.stringify(data));
}

const readFile = () => {

    /////////////////////////////////////////////////////////
    //
    //  fs.existsSync(path)
    //      Returns true if the path exists, false otherwise.
    //
    /////////////////////////////////////////////////////////

    if (!fs.existsSync(path)) {
        return null
    }

    ///////////////////////////////////////////////////////////////////////////
    //
    // fs.readFileSync(path[, options])
    //      Returns the contents of the path. Crashes if path doesn't exisits
    //
    //  options <Object> | <string>
    //          encoding <string> | <null> Default: null
    //          flag <string> See support of file system flags. Default: 'r'.
    //
    ////////////////////////////////////////////////////////////////////////////

    const CONTENT = fs.readFileSync(path, { encoding: 'utf-8' });
    const DATA = JSON.parse(CONTENT);
    
    return DATA;
}

module.exports = {
    createFile,
    readFile
}