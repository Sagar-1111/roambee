const request = require('request');
const htmlToJson = require('html-to-json');

module.exports = function flipcart (callback){
  const promise = htmlToJson.request('https://www.flipkart.com/men/tshirts/pr?sid=2oq%2Cs9b%2Cj9y&otracker=nmenu_sub_Men', {
    'title': ['._2cLu-l', function ($title) {
      return $title.text();
    }]
  }, function (err, result) {
    let output = [];
    const keyword = "printed";
    result.title.forEach(item => {
      if(item.toLowerCase().includes(keyword)){
        output.push(item);
      }
    });
    callback(null,output);
  });
}
