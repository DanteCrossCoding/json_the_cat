const request = require('request');
const input = process.argv.slice(2).join();

const breed = input.substring(0, 3);
const searchBreed = ('https://api.thecatapi.com/v1/breeds/search?q=' + breed);


request(searchBreed, (error, response, body) => {

  // console.log('error:', error);
  console.log('statusResponse:', response && response.statusResponse);
  
  if (error !== null) {
    console.log('Error accessing website');
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Error: That is not a cat');
    return;
  }
  console.log('body:', data[0].description);
  console.log();
  console.log(typeof data);
});