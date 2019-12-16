const fs = require('fs');
const content = fs.readFileSync('./Obloq.ts');
console.log(content.toString('utf-8'));
