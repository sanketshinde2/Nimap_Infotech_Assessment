const https = require('https');

// Define helper function to extract and format hobbies (define-ocg)
function getHobbies(jsonData) {
  if (!jsonData || !jsonData.hobbies) {
    return 'No hobbies found';
  }
  return jsonData.hobbies.join(', ');
}

const varOcg = 'https://coderbyte.com/api/challenges/json/rest-get-simple';

https.get(varOcg, (resp) => {
  let data = '';

  // Concatenate received data chunks
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // Parse JSON data and extract hobbies
  resp.on('end', () => {
    try {
      const jsonData = JSON.parse(data);
      const hobbies = getHobbies(jsonData);
      console.log(hobbies);
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  });
});