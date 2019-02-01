const fs = require('fs');
const ncp = require('ncp').ncp;

const destinationDir = './docs';

if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir);
}

ncp('./build', destinationDir, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Succesfully copied build to docs folder');
});
