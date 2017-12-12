const resultController = require('../controllers/results');

module.exports  = (app) => {
	app.get('/cron', resultController.cron);
	app.get('/flipcart', resultController.amazon);
	app.get('/amazon', resultController.flipcart);
};
