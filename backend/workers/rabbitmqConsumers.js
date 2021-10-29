'use strict';

let rabbitmq_connector = 'amqps://psabnghc:ars_RYFGXNKpPXFZkhBdRvwCEfW7M47x@crow.rmq.cloudamqp.com/psabnghc';

let Open = require('amqplib').connect(rabbitmq_connector);

let import_consume = function()
{
  let q = 'import';

  Open.then(function(conn) {
    process.once('SIGINT', function() { conn.close(); });
    return conn.createChannel()

      .then(function(ch) {
        let ok = ch.assertQueue(q, {durable: true});
        ok = ok.then(function () {
          ch.prefetch(2);
        });
        ok = ok.then(function () {
          ch.consume(q, doWork, {noAck: false});
        });
        return ok;

        function doWork(msg) {
          let body = msg.content.toString();
          console.log(' [x] Received \'%s\'', body);
          let secs = body.split('.').length - 1;
          let thread = JSON.parse(body);
          setTimeout(function () {
            ch.ack(msg);
          }, secs * 1000);
        }


      });
  }).catch(console.warn);
};


(function on_load() {
  import_consume();
})();