'use strict';

let rabbitmq_connector = 'amqps://psabnghc:ars_RYFGXNKpPXFZkhBdRvwCEfW7M47x@crow.rmq.cloudamqp.com/psabnghc';

let Open = require('amqplib').connect(rabbitmq_connector);

exports.import_publish = function(msg) {

  let q = 'import';

  Open.then(function(conn) {

    return conn.createChannel();

  }).then(function(ch) {

    return ch.assertQueue(q, {durable: true}).then(function() {
      
      ch.sendToQueue(q, new Buffer(JSON.stringify(msg)));

      return ch.close();

    });

  }).catch(console.warn);

};