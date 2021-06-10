const fs = require('fs');

let functionsTasks = {
    getList: function () {
        var taskJSON = fs.readFileSync('task.json', 'utf-8');
        let task = JSON.parse( taskJSON );
        return task;
    },

    setTask: function (newTask) {
        let tasks = functionsTasks.getList();
        tasks.push(newTask);
        functionsTasks.writeInFile(tasks);
    },
    
    writeInFile: function (listOfTask){
        let tasks =  JSON.stringify(listOfTask);
        fs.writeFileSync('task.json', tasks , 'utf-8');
    }

}


module.exports = functionsTasks;
