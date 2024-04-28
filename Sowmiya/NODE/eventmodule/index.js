const logEvents = require('./logEvents');

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('log',(message)=>{
    logEvents(message);
}) 

 setTimeout(()=>{
    emitter.emit('log','log event emitted')
 },2000);
