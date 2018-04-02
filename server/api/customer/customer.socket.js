/**
 * Broadcast updates to client when the model changes
 */

'use strict';

import CustomerEvents from './customer.events';

// Model events to emit
var events = ['save', 'remove'];

export function register(spark) {
  // Bind model events to socket events
  for(let event of events) {
    var listener = createListener(`customer:${event}`, spark);

    CustomerEvents.on(event, listener);
    spark.on('disconnect', removeListener(event, listener));
  }
}


function createListener(event, spark) {
  return function(doc) {
    spark.emit(event, doc);
  };
}

function removeListener(event, listener) {
  return function() {
    CustomerEvents.removeListener(event, listener);
  };
}
