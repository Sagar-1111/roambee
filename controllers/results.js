const redis = require('redis');
const client = redis.createClient();
const amazonData = require('../request/amazon');
const flipcartData = require('../request/flipcart');

module.exports = {
	cron(req, res, next){
		client.get('roambee', function(err, reply) {
	    reply = JSON.parse(reply);
	    res.send(reply)
		});
	},
	amazon(req, res, next){
    amazonData()
			.then(data => {
				res.send(data);
			})
			.catch(err => next(err));
	},
	flipcart(req, res, next){
    flipcartData()
			.then(data => {
				res.send(data);
			})
			.catch(err => next(err));
	}
};
