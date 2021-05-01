const inquirer = require('inquirer');
require('colors');

//////////////////////////////////////////////////////////////////////
//
//              here comes the inquirer questions
// A question object is a hash containing question related values
//
//////////////////////////////////////////////////////////////////////

const questions = [
    {
        type: 'list', //shows a list
        name: 'option',
        message: 'what do you want to do?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create TODO List`
            },
            {
                value: '2',
                name: `${'2.'.green} Show TODO List`
            },
            {
                value: '3',
                name: `${'3.'.green} Show TODO Completed List`
            },
            {
                value: '4',
                name: `${'4.'.green} Show Pending TODO List`
            },
            {
                value: '5',
                name: `${'5.'.green} Check TODO List`
            },
            {
                value: '6',
                name: `${'6.'.green} Drop TODO`
            },
            {
                value: '0',
                name: `${'0.'.green} EXIT`
            }

        ]
    }
    
];

const pause = [
    {
        type: 'input',
        name: 'pauseMenu',
        message: `press ${'ENTER'.green} to continue`
    }
];
const inquirerMenu = async () => {

    console.clear();

    console.log("========================".rainbow);
    console.log("   Select an option".green);
    console.log("========================\n".rainbow);


    const { option } = await inquirer.prompt(questions);

    return option;
}

const inquirerPause = async () => {

    console.log('\n');
    await inquirer.prompt(pause);

}

module.exports = {
    inquirerMenu,
    inquirerPause
}