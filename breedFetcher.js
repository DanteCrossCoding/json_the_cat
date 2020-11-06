const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  
  const searchBreed = ('https://api.thecatapi.com/v1/breeds/search?q=' + breedName);
  request(searchBreed, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Error: That is not a cat');
      return;
    }
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback(error, null);
    }
  });
};


module.exports = { fetchBreedDescription };
