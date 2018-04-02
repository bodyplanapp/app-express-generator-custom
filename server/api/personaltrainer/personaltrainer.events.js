/**
 * Personaltrainer model events
 */

'use strict';

import {EventEmitter} from 'events';
var Personaltrainer = require('../../sqldb').Personaltrainer;
var PersonaltrainerEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PersonaltrainerEvents.setMaxListeners(0);

// Model events
var events = {
  afterCreate: 'save',
  afterUpdate: 'save',
  afterDestroy: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Personaltrainer) {
  for(var e in events) {
    let event = events[e];
    Personaltrainer.hook(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc, options, done) {
    PersonaltrainerEvents.emit(event + ':' + doc._id, doc);
    PersonaltrainerEvents.emit(event, doc);
    done(null);
  };
}

registerEvents(Personaltrainer);
export default PersonaltrainerEvents;
