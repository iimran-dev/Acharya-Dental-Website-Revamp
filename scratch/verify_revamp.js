const http = require('http');

const checks = [
  '50 Years of',
  'Trusted Dental',
  'Excellence',
  'Advanced Dentistry in Chennai for Families',
  'Dr. Vijailakshmi Acharya',
  'Dr. Varun Acharya',
  'Our Signature Treatments',
  'Dental Implants',
  'Smile Makeover',
  'Full Mouth Rehabilitation',
  'Orthodontics',
  'Why Patients Choose Acharya Dental',
  '50+ Years Legacy',
  '1000+ International Patients',
  'Digital Treatment Planning',
  'World-Class Sterilization',
  'Smile Transformations',
  'International Patients',
  'Your Smile. Our Expertise.',
  'Seamless Experience',
  'Ready for a Healthier,',
  'More Confident Smile?',
  'Schedule Your Visit',
  'No. 5, Thirumurthy Nagar 6th Street',
  'acharya@acharyadental.com',
  '+91 44 4383 1000',
  'AAID'
];

http.get('http://localhost:3002/acharya-dental', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    console.log(`Server responded with Status: ${res.statusCode}, Size: ${html.length} bytes`);
    let allPassed = true;
    for (const check of checks) {
      const found = html.toLowerCase().includes(check.toLowerCase());
      console.log(`[${found ? 'PASS' : 'FAIL'}] ${check}`);
      if (!found) allPassed = false;
    }
    console.log(`\nOverall Verification: ${allPassed ? 'ALL CHECKS PASSED ✅' : 'SOME CHECKS FAILED ❌'}`);
  });
}).on('error', (err) => {
  console.error('Connection error:', err.message);
});
