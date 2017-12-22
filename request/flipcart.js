const request = require('request');
const htmlToJson = require('html-to-json');
const keyword = "printed";

function flipcart() {
  return new Promise(function(resolve, reject){
    const promise = htmlToJson.request('https://www.flipkart.com/men/tshirts/pr?sid=2oq%2Cs9b%2Cj9y&otracker=nmenu_sub_Men', {
      'title': ['._2cLu-l', function ($title) {
        return $title.text();
      }]
    }, function (err, result) {
      if(err){
        reject(["Something went wrong while fetching flipcart data"]);
      }
      let output = [];
      result.title.forEach(item => {
        if(item.toLowerCase().includes(keyword)){
          output.push(item);
        }
      });
      resolve(output);
    });
  })
}

module.exports = flipcart;
