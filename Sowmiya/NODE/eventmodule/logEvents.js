const fs = require('fs');
const fsPromises=require('fs').promises;
const path = require('path');
const date = require('date-fns');
const id = require('uuid');

const logEvents = async(message)=>{
    const dateTime = `${date.format(new Date(),'dd/MM/yyy\tHH:mm:ss')}`;
    const logItem =`${dateTime}\t${id.v4()}\t${message}\n`;
    console.log(logItem);
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventfile.txt'),logItem)
    }catch(err){
        console.log("error");
    }
}

module.exports = logEvents;