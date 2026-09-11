const https = require('https');

function fetchImages(url) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const matches = data.match(/https:\/\/acharyadental\.com\/wp-content\/uploads\/[^\s"'<>]+\.(?:webp|jpg|jpeg|png)/gi) || [];
      console.log(`=== ${url} ===`);
      console.log([...new Set(matches)].join('\n'));
    });
  }).on('error', (err) => console.error(err));
}

fetchImages('https://acharyadental.com/take-a-tour/');
fetchImages('https://acharyadental.com/dr-vijailakshmi-acharya/');
fetchImages('https://acharyadental.com/dr-varun-acharya/');
