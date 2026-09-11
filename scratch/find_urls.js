const fs = require('fs');
const content = fs.readFileSync('C:/Users/uwais/.gemini/antigravity-ide/brain/7437b3f2-4496-4e73-ba27-d84b9ba3b913/.system_generated/steps/33/content.md', 'utf8');
const matches = content.match(/https?:\/\/[^\s"'<>]+\.(?:webp|jpg|jpeg|png|svg)/gi) || [];
console.log([...new Set(matches)].filter(u => u.includes('acharyadental.com')).join('\n'));
