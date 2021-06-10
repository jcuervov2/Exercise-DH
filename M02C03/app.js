const { create } = require("domain");
const functionsTasks = require("./tareas");

const ACTION_LIST_TASKS = 'LIST';
const ACTION_ADD_TASK = 'ADD';

const PENDING_TASK = 'pendiente';
const PROGRESS_TASK = 'progreso';

function listTask(){

    let tasks = functionsTasks.getList();

    tasks.forEach((task, index) => {
        console.log( `${index +1 } - The taks ${task.title} is ${task.state}`)
    });
}

function createTask( titleParam, stateParam ){

    const body = {
        title: titleParam,
        state: stateParam,
    };

    functionsTasks.setTask(body);
    console.log( `The taks ${body.title} is ${body.state} was saving`)
}

function listTaskByState( ){

    let tasks = functionsTasks.getList();

    let pendingTask = tasks.filter( (task) => task.state === PENDING_TASK);
    let progressTask = tasks.filter( (task) => task.state === PROGRESS_TASK);
    console.log( '');
    console.log( `                 TASK LIST                ` )
    console.log( '');
  


    console.log( `Tasks pending`)
    console.log( '');
 
    pendingTask.forEach((task, index) => {
        console.log( `${index +1 } - The taks ${task.title} is ${task.state}`)
    });

    console.log( '');
    console.log( `Tasks in progress`)
    console.log( '');

    progressTask.forEach((task, index) => {
        console.log( `${index +1 } - The taks ${task.title} is ${task.state}`)
    });
    console.log( `_______________________________`);
    console.log( '');
    console.log( `Total tasks in progress --  ${progressTask.length}`)
    console.log( `Total task pending -------  ${pendingTask.length}`)
    console.log( `Total task ---------------  ${tasks.length}`)


}



function lostAction(){
    console.log( 'I don\'t understand, argument missing ')
}

function undefinedAccion(){
    console.log( 'undefined accion')
}


let action = process.argv[2];
let title = process.argv[3];

if( action === ACTION_LIST_TASKS) listTaskByState();
else if ( action === ACTION_ADD_TASK){
    createTask(title,PENDING_TASK);
} 
else if (typeof action === 'undefined') lostAction();
else undefinedAccion();



