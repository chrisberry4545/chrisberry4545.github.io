const ghPages = require('gh-pages');

ghPages.publish('_site', (err) => {
  if (err) {
    console.log('Error deploying to github pages...');
    console.log(err);
    process.exit(1);
  }
  console.log('Successfully deployed to gh pages');
});
