const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listen to an event
emitter.on('event', function(message) {
  console.log(`Received message: ${message}`);
});

// Emit an event
emitter.emit('event', 'Hello world with Node.js Events!');