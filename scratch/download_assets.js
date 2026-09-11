const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/acharyadental');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const urls = [
  'https://acharyadental.com/wp-content/uploads/2024/10/acharya-dental-logo.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/vijailakshmi-acharya.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/varun-acharya.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/dental-implants.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/full-mouth-rehabilitation.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/crowns-bridges.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/invisalign.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/orthodontics.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/teeth-whitening-1.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/teeth-cleaning-1.webp',
  'https://acharyadental.com/wp-content/uploads/2024/10/t1.jpg',
  'https://acharyadental.com/wp-content/uploads/2024/10/t2.jpg',
  'https://acharyadental.com/wp-content/uploads/2024/10/t3.jpg',
  'https://acharyadental.com/wp-content/uploads/2024/10/t4.jpg',
  'https://acharyadental.com/wp-content/uploads/2024/10/t25.jpg',
  'https://acharyadental.com/wp-content/uploads/2018/11/aaid.webp',
  'https://acharyadental.com/wp-content/uploads/2018/11/ida.org_.webp',
  'https://acharyadental.com/wp-content/uploads/2018/11/icd.webp',
  'https://acharyadental.com/wp-content/uploads/2018/11/american-college-of-prosthodontics.webp',
  'https://acharyadental.com/wp-content/uploads/2018/11/abpros.webp'
];

urls.forEach(url => {
  const filename = path.basename(url);
  const dest = path.join(targetDir, filename);
  const file = fs.createWriteStream(dest);
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
      });
    } else {
      console.log(`Failed ${url}: status ${res.statusCode}`);
      file.close();
      fs.unlinkSync(dest);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${url}:`, err.message);
  });
});
