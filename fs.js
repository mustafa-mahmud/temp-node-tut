/* const { readFileSync, writeFileSync } = require('fs');

console.log('Start============');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt',
  `Here the result of Sync: ${first} AND ${second}`,
  { flag: 'a' }
);
console.log('End=================');
console.log('New Start==============='); */

const { readFile, writeFile } = require('fs');

console.log('Start============');
readFile('./content/first.txt', 'utf8', (err, res) => {
  if (err) return console.log('Error from First.txt');

  const firstRes = res;

  readFile('./content/second.txt', 'utf8', (err, res) => {
    if (err) return console.log('Error from Second.txt');

    const secondRes = res;

    writeFile(
      './content/result-async.txt',
      `Files written by Async: ${firstRes} AND ${secondRes}`,
      (err) => {
        if (err)
          return console.log('Some wrong occured when written into a file...');
        console.log('End======================');
      }
    );
  });
});
console.log('New Start===============');
