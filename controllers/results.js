const fs = require('fs');
const amazonData = require('../request/amazon');
const flipcartData = require('../request/flipcart');

module.exports = {
	cron(req, res, next){
		let response = fs.readFileSync(__dirname + '/../data/data.json','utf8')
    res.send(response);
	},
	amazon(req, res, next){
    amazonData(function(err, data){
      if(data){
        res.send(data);
      }
    })
	},
	flipcart(req, res, next){
    flipcartData(function(err, data){
      if(data){
        res.send(data);
      }
    })
	}
};
