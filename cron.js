const cron = require('node-cron');
const flipcart = require('./request/flipcart');
const redis = require('redis');
const amazon = require('./request/amazon');
const client = redis.createClient();

client.on('connect', function() {
    console.log('connected to redis');
});

(function(){
  cron.schedule('*/5 * * * *', function(){
    let arr = [];
    Promise.all([amazon(),flipcart()])
      .then(data => {
        const store = JSON.stringify(data[0].concat(data[1]));
        client.set('roambee', store);
      })
      .catch(err => {
        throw new Error(err);
      });
  })
})();
