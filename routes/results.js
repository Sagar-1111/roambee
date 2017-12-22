const resultController = require('../controllers/results');

module.exports  = (app) => {
	app.get('/cron', resultController.cron);
	app.get('/flipcart', resultController.flipcart);
	app.get('/amazon', resultController.amazon);
};
