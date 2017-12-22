const request = require('request');
const htmlToJson = require('html-to-json');
const keyword = "cotton";

function amazon() {
  return new Promise(function (resolve, reject){
    const promise = htmlToJson.request('https://www.amazon.in/Mens-Tshirts-Polos/b/?node=1968120031', {
      'title': ['.s-access-detail-page', function ($title) {
        return $title.text();
      }]
    }, function (err, result) {
      if(err){
        reject(["Something went wrong while fetching amazon data"]);
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

module.exports = amazon;
