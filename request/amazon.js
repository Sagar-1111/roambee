const request = require('request');
const htmlToJson = require('html-to-json');

module.exports = function amazon(callback) {
  const promise = htmlToJson.request('https://www.amazon.in/Mens-Tshirts-Polos/b/?node=1968120031', {
    'title': ['.s-access-detail-page', function ($title) {
      return $title.text();
    }]
  }, function (err, result) {
    let output = [];
    const keyword = "cotton";
    result.title.forEach(item => {
      if(item.toLowerCase().includes(keyword)){
        output.push(item);
      }
    });
    callback(null, output);
  });
}
