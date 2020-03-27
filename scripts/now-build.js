const fs = require('fs');
const path = require('path');

const fn = `
module.exports = (req, res) => {
  res.end('works!');
}
`;

console.log(fs.readdirSync('./api'));

const apiDir = path.resolve('./api');
console.log({ apiDir });

const testFile = path.join(apiDir, 'test.js');
console.log({ testFile });

fs.writeFileSync(testFile, fn);
console.log(fs.readFileSync(testFile, { encoding: 'utf-8' }));

console.log(fs.readdirSync('./api'));
