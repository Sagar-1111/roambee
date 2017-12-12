const cron = require('node-cron');
const flipcart = require('./request/flipcart');
const amazon = require('./request/amazon');
const fs = require('fs');

(function(){
  cron.schedule('*/5 * * * *', function(){
    console.log("This function will get invoked in every five minutes")
    let arr = [];
    amazon(function(err, res){
      arr.push(res);
      flipcart(function(err, res){
        arr.push(res);
        fs.writeFileSync('./data/data.json', JSON.stringify(arr));
      });
    });
  })
})();
